const Projet = require('../models/Projet');

exports.getAllProjet = (req, res, next) => {
    Projet.find()
    .then(projets => res.status(200).json(projets))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneProjet = (req, res, next) => {
    Projet.findOne({ _id: req.params.id })
    .then(projet => res.status(200).json(projet))
    .catch(error => res.status(404).json({ error}));
};