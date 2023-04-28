import db from "../database/db.js";

export async function createCourse(req, res) {
    const { title, price, description, theme } = req.body;

    try {
        const session = res.locals.session;

        const newCourse = { 
            title, 
            price, 
            description,
            theme 
        }

        const oldCourse = await db.collection("courses").find(newCourse);
        if(oldCourse) return res.status(409).send("You've already created this course");
        
        await db.collection("courses").insertOne(newCourse);
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getCursos(req,res){
    try { 
        const cursos=await db.collection("courses").find().toArray()
        res.status(201).send(cursos);

    } catch (err) {
        res.status(500).send(err.message)
    }
}