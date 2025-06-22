// src/app.js
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', contactRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});