import express from 'express';
import cors from 'cors';
import router from './routers/routesIndex.js';
import chalk from 'chalk';


const app = express();

app.use(express.json());
app.use(cors())
app.use(router);

app.post("/participants", async (req, res) => {

    const { name, email, password, passwordConfirm } = req.body;
    const user = { name, email, password, passwordConfirm };

    const userAlreadyRegistered = await db.collection('users').findOne({ email: email });
    if (userAlreadyRegistered) return res.sendStatus(409);

    const validation = singupUserSchema.validate(user);
    if (validation.error) return res.sendStatus(422);

    const passwordHash = bcrypt.hashSync(user.password, 10);

    await db.collection("users").insertOne({
        name: name.trim(),
        email: email.trim(),
        password: passwordHash.trim()
    });

    res.status(201).send("New user created successfully");

})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(chalk.green(`Rodando em http://localhost:${PORT}`));
});
