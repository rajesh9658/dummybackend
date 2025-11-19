import express from "express";
import { mailTransporter } from "../config/mail.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  const mailOptions = {
    from: `"SSCF Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL, // admin receives email
    subject: `New Inquiry from ${name}`,
    html: `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await mailTransporter.sendMail(mailOptions);

    return res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.log("Email error:", error);
    return res.status(500).json({ success: false, message: "Email failed" });
  }
});

export default router;
