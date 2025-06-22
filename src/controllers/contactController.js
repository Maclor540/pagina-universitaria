// src/controllers/contactController.js
const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
    const { nombre, email, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
        return res.status(400).json({ msg: 'Por favor, complete todos los campos.' });
    }

    try {
        const newContact = new Contact({ nombre, email, mensaje });
        await newContact.save();

        console.log('Datos recibidos y guardados:', { nombre, email, mensaje });
        res.status(200).json({ msg: '¡Mensaje recibido con éxito! Gracias por contactarnos.', data: newContact });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor al procesar el mensaje.');
    }
};