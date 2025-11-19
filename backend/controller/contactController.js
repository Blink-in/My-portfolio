const express = require("express");
const Contact = require("../module/contactModule.js");

const nodemailer = require("nodemailer");
require("dotenv").config();
const sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save contact to database
    const newContact = new Contact({
      name, email, message
    });
    await newContact.save();

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
         user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Send email to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
        res.status(201).json({ message: "Successfully sent a message to Admin" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
   


module.exports ={
sendContactEmail
};