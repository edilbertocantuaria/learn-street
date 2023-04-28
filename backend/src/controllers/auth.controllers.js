import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from '../database/db.js';


export async function postUser(req, res) {
    const { name, email, password } = req.body;

    try {
        const userAlreadyRegistered = await db.collection('users').findOne({ email: email });
        if (userAlreadyRegistered) return res.sendStatus(409);

        const passwordHash = bcrypt.hashSync(password, 10);
        await db.collection("users").insertOne({
            name: name.trim(),
            email: email.trim(),
            password: passwordHash.trim()
        });
        res.status(201).send("New user created successfully");

    } catch (err) {
        res.status(500).send("err.message auth controller");
    }

}

export async function loginUser(req, res) {
    const { email, password } = req.body;

    const validation = loginSchema.validate({ email, password });
    if (validation.error) return res.status(422).send("validation");

    const user = await db.collection('users').findOne({ email: email });

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = uuid();

        await db.collection('sessions').insertOne({
            token: token,
            userId: user._id
        })

        res.status(200).send({ user, token });

    } else {
        if (!user) {
            return res.sendStatus(404);
        }
        return res.sendStatus(401);
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
