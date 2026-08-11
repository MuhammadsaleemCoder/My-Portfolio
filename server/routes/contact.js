const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
// const nodemailer = require('nodemailer');
const {Resend }= require("resend")
const resend = new Resend(process.env.RESEND_API_KEY);




// const transporter = nodemailer.createTransport({
//   service:"gmail",
//   auth:{
//     user:process.env.EMAIL_USER,
//     pass:process.env.EMAIL_PASS
//   }
// })

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

   try {
  const data = await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Message from ${name}`,
    html: `
      <h3>New Contact Form Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });
  console.log('Resend response:', data); // ← Yeh add karo
} catch (emailErr) {
  console.error('Email error:', emailErr); // ← Yeh add karo
}

    res.status(201).json({
      success: true,
      message: 'Message received! Muhammad will get back to you soon.',
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ error: errors.join(', ') });
    }
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
