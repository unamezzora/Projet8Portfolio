const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data.json');

exports.getAllProjet = (req, res, next) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Échec de la lecture des données'});
        } 
        const projets = JSON.parse(data);
        res.status(200).json(projets);
    });
};

exports.getOneProjet = (req, res, next) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Échec de la lecture des données'});
        }
        const projets = JSON.parse(data);
        const projet = projets.find((p) => p._id === req.params.id);
        if (!projet) {
            res.status(404).json({ error: 'Projet non trouvé'});
        }
        res.status(200).json(projet);
    });
};