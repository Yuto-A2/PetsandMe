const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", async (request, response) => {
    try {
        const mail = process.env.MAIL_ACCOUNT;
        const pass = process.env.MAIL_PASSWORD;

        if (!mail || !pass) {
            return response.status(500).json({ error: "Mail credentials are missing" });
        }

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            port: 465,
            secure: true,
            auth: {
                user: mail,
                pass: pass,
            }
        });

        console.log(request.query);

        let message = `You have received a form submission: Send by: ${request.query.userEmail}\nFrom: ${request.query.userEmail}\nMessage: ${request.query.userMsg}`;

        const emailData = {
            from: request.query.userEmail,
            to: "yutoarimori@gmail.com",
            subject: "Test Mail",
            text: message
        };

        const info = await transporter.sendMail(emailData);
        console.log("Email sent: ", info.response);

        response.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        response.status(500).json({ error: "Failed to send email" });
    }
});

module.exports = router;
