import db from "../database/db"

export async function addCart(req,res){
    const {couse_name,course_cost} =req.body
    try { 
        const sessao=res.locals.session
        const carrinho=await db.collection("cart").insertOne({
            userId:session.userId,
            couse_name,
            course_cost
        })

        res.status(201).send("Added to cart")

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function removeCart(req,res){
    const {title}=req.body
    try { 
        const result=await db.collection("cart").deleteOne({title})
        res.status(201).send("Removed from cart")

    } catch (err) {
        res.status(500).send(err.message)
    }
}