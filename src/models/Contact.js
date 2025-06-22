// src/models/Contact.js
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, match: /^\S+@\S+\.\S+$/ },
    mensaje: { type: String, required: true },
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', ContactSchema);