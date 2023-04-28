import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from "../database/db.js";
//teste de commit

export async function postUser(req, res) {
    const { name, email, password } = req.body;

    try {
        const userAlreadyRegistered = await db.collection('users').findOne({ email: email });
        if (userAlreadyRegistered) return res.sendStatus(409);

        const passwordHash = bcrypt.hashSync(password, 10);
        await db.collection("users").insertOne({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            password: passwordHash.trim()
        });
        res.status(201).send("New user created successfully");

    } catch (err) {
        res.status(500).send(err.message);
    }

}

export async function loginUser(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection('users').findOne({ email: email.toLowerCase() });
        if (!user) return res.status(404).send("User not found");

        const correctPassword = bcrypt.compareSync(password, user.password);
        if (!correctPassword) return res.status(401).send("Incorrect password!")

        if (user && correctPassword) {
            const token = uuid();

            await db.collection('sessions').insertOne({
                token: token,
                userId: user._id
            })

            res.status(200).send({ userName: user.name, token });

        }
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

export async function logoutUser(req, res) {
    const { token } = res.locals.session
    try {
        await db.collection("sessions").deleteOne({ token })
        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}