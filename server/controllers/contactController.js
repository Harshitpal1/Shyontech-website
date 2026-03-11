const Contact = require('../models/Contact');
const { validationResult } = require('express-validator');

exports.submitContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, phone, subject, message } = req.body;
    const contact = await Contact.create({ name, email, phone, subject, message });

    console.log(`📩 New contact form submission from ${name} <${email}>`);

    res.status(201).json({
      success: true,
      message: 'Your message has been received. We will get back to you soon!',
      data: { id: contact._id },
    });
  } catch (err) {
    next(err);
  }
};
