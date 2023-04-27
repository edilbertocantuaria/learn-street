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
        res.sendStatus(200);

    } catch (err) {
        res.status(500).send(err.message)
    }
}