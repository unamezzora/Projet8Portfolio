const mongoose = require('mongoose');

const projetSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    cover: { type: String, required: true },
    images: [
        { type: String, required: true }
    ],
    skills: { type: String, required: true },
    github: { type: String, required: true },
    color: { type: String, required: true },
});

module.exports = mongoose.model('Projet', projetSchema)

