const express = require("express");
const app = express();
const ImgRouter = require("./routes/imgs.js");
const emailRouter = require("./routes/email.js");
const PORT = 3001;
const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const MONGODB = process.env.MONGODB;

mongoose.connect(`${MONGODB}`)
.then(()=> {
    console.log("connect with db...");
}).catch((err) => {
    console.log("Error", err);
})
app.use(cors({
    origin: "*"
  }));
app.use("/api/imgs/", ImgRouter);
app.use("/api/email/", emailRouter);
app.listen(PORT, () => console.log("Start server"));