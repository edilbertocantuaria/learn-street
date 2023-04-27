import db from '../database/db';

export async function createCourse(req, res) {
    const { title, price, description } = req.body;

    try {
        const session = res.locals.session;

        const newCourse = { 
            userId: session.userId, 
            title, 
            price, 
            description 
        }

        const oldCourse = await db.collection("courses").find(newCourse);
        if(oldCourse) return res.status(409).send("You've already created this course");
        
        await db.collection("courses").insertOne(newCourse);
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message)
    }
}