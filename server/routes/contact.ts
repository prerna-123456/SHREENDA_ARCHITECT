import { RequestHandler } from "express";
import nodemailer from "nodemailer";

export const contactHandler: RequestHandler = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    // 🔥 transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔥 mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // tumhe hi mail aayega
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    // 🔥 send mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false });
  }
};