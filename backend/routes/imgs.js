const router = require("express").Router();
const mongoose = require("mongoose");

async function connection() {
    if (!mongoose.connection.readyState) {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    return mongoose.connection.db;
}

async function getImgs() {
    const db = await connection();
    const results = db.collection("images").find({});
    return await results.toArray();
}

router.get("/", async (req, res) => {
    try {
        const imgs = await getImgs();
        res.json(imgs);
    } catch (err) {
        console.error("Error", err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
