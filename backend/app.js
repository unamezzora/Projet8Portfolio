const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const projetRoutes = require('./routes/projet_routes');

mongoose.connect("mongodb+srv://tatzemliakova:BgQsVONwry88jYAF@cluster0.fsw72.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/projet', projetRoutes);

/*
app.use('/api/projet', (req, res, next) => {
    const projet = [
        {
            id: 'kjghfkdfkl',
            title: 'Booki',
            description: 'Une agence de voyage qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix',
            cover: 'https://www.agera.asso.fr/app/uploads/2020/08/Projet.jpg',
            images: [
                'https://www.omebatobo.fr/wp-content/uploads/agence-de-voyage.jpg',
                'https://www.parvisdesgentils.fr/wp-content/uploads/2020/02/agence-de-voyage.jpg',
                'https://www.autour-dumonde.fr/sx-content/uploads/cms/img-presentation-1.jpg',
                'https://www.civitatis.com/blog/wp-content/uploads/2023/07/shutterstock_262168289-1920x1243.jpg',
            ],
            skills: 'HTML, CSS',
            github: 'https://github.com/unamezzora/Projet1.git',
            color: 'rose'

        },
        {
            id: 'fh145kdfg4',
            title: 'Sophie Bluel',
            description: 'Un site portfolio d’une architecte d’intérieur Sophie Bluel',
            cover: 'https://www.agera.asso.fr/app/uploads/2020/08/Projet.jpg',
            images: [
                'https://www.omebatobo.fr/wp-content/uploads/agence-de-voyage.jpg',
                'https://www.parvisdesgentils.fr/wp-content/uploads/2020/02/agence-de-voyage.jpg',
                'https://www.autour-dumonde.fr/sx-content/uploads/cms/img-presentation-1.jpg',
                'https://www.civitatis.com/blog/wp-content/uploads/2023/07/shutterstock_262168289-1920x1243.jpg',
            ],
            skills: 'HTML, CSS, Java Script',
            github: 'https://github.com/unamezzora/Projet3.git',
            color: 'beige'

        },
        {
            id: 'hy987dft86',
            title: 'Kasa',
            description: 'Une entreprise de location d’appartements entre particuliers',
            cover: 'https://www.agera.asso.fr/app/uploads/2020/08/Projet.jpg',
            images: [
                'https://www.omebatobo.fr/wp-content/uploads/agence-de-voyage.jpg',
                'https://www.parvisdesgentils.fr/wp-content/uploads/2020/02/agence-de-voyage.jpg',
                'https://www.autour-dumonde.fr/sx-content/uploads/cms/img-presentation-1.jpg',
                'https://www.civitatis.com/blog/wp-content/uploads/2023/07/shutterstock_262168289-1920x1243.jpg',
            ],
            skills: 'React, Sass',
            github: 'https://github.com/unamezzora/Projet5.git',
            color: 'beige'

        },
        {
            id: 'yz635pma37',
            title: 'Mon Vieux Grimoire',
            description: 'Un site de référencement et de notation de livres',
            cover: 'https://www.agera.asso.fr/app/uploads/2020/08/Projet.jpg',
            images: [
                'https://www.omebatobo.fr/wp-content/uploads/agence-de-voyage.jpg',
                'https://www.parvisdesgentils.fr/wp-content/uploads/2020/02/agence-de-voyage.jpg',
                'https://www.autour-dumonde.fr/sx-content/uploads/cms/img-presentation-1.jpg',
                'https://www.civitatis.com/blog/wp-content/uploads/2023/07/shutterstock_262168289-1920x1243.jpg',
            ],
            skills: 'Node.js, Express, MongoDB',
            github: 'https://github.com/unamezzora/Projet6MVG.git',
            color: 'bleu'
        },
    ];
    res.status(200).json(projet);
});
*/

module.exports = app;