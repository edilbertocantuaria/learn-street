import db from "../database/db.js";

export async function checkout(req, res) {
    const { name, card_number, card_valid_date, card_security_code, email } = req.body;

    try {
        const session = res.locals.session;

        const cart = await db.collection("cart").find({ userId: session.userId }).toArray();

        const checkoutCart = cart.map(c => {
            const { userId, ...newCart } = c;
            return newCart
        });

        const checkout = {
            userId: session.userId,
            name,
            card_number,
            card_valid_date,
            card_security_code,
            email,
            checkoutCart
        }

        await db.collection("checkout").insertOne(checkout);

        /*const emptyCart = await db.collection("cart").deleteMany({ userId: session.userId });
        if (emptyCart.deletedCount === 0) return res.sendStatus(404);*/

        res.sendStatus(200);
        drainOutCart;

    } catch (err) {
        res.status(500).send(err.message)
    }
}

function drainOutCart() {

    const session = res.locals.session;
    const emptyCart = db.collection("cart").deleteMany({ userId: session.userId });
    if (emptyCart.deletedCount === 0) return res.sendStatus(404);
}

export async function getCart(req, res) {
    const { userId } = res.locals.session;
    try {
        const purchaseCart = await db.collection("cart").find({ userId }).toArray();
        res.send(purchaseCart)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

export async function addCart(req, res) {
    const { course_name, course_cost } = req.body
    try {
        const session = res.locals.session
        const carrinho = await db.collection("cart").insertOne({
            userId: session.userId,
            course_name,
            course_cost
        })

        res.status(201).send("Added to cart")

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function removeCart(req, res) {
    const { course_name } = req.body
    try {

        const result = await db.collection("cart").deleteOne({ course_name })

        res.status(201).send("Removed from cart")

    } catch (err) {
        res.status(500).send(err.message)
    }
}