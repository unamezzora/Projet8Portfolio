const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/projet', (req, res, next) => {
    const projet = [
        {
            id: 'kjghfkdfkl',
            title: 'Booki',
            description: 'Une agence de voyage qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix',
            cover: 'https://www.agera.asso.fr/app/uploads/2020/08/Projet.jpg',
            images: [
                'https://www.omebatobo.fr/wp-content/uploads/agence-de-voyage.jpg',
                'https://www.parvisdesgentils.fr/wp-content/uploads/2020/02/agence-de-voyage.jpg'
            ],
            skills: 'HTML, CSS',
            github: 'https://github.com/unamezzora/Projet1.git'

        },
        {
            id: 'fh145kdfg4',
            title: 'Sophie Bluel',
            description: 'Un site portfolio d’une architecte d’intérieur Sophie Bluel',
            cover: 'https://www.agera.asso.fr/app/uploads/2020/08/Projet.jpg',
            images: [
                'https://www.omebatobo.fr/wp-content/uploads/agence-de-voyage.jpg',
                'https://www.parvisdesgentils.fr/wp-content/uploads/2020/02/agence-de-voyage.jpg'
            ],
            skills: 'HTML, CSS, Java Script',
            github: 'https://github.com/unamezzora/Projet3.git'

        },
        {
            id: 'hy987dft86',
            title: 'Kasa',
            description: 'Une entreprise de location d’appartements entre particuliers',
            cover: 'https://www.agera.asso.fr/app/uploads/2020/08/Projet.jpg',
            images: [
                'https://www.omebatobo.fr/wp-content/uploads/agence-de-voyage.jpg',
                'https://www.parvisdesgentils.fr/wp-content/uploads/2020/02/agence-de-voyage.jpg'
            ],
            skills: 'React, Sass',
            github: 'https://github.com/unamezzora/Projet5.git'

        },
        {
            id: 'yz635pma37',
            title: 'Mon Vieux Grimoire',
            description: 'Un site de référencement et de notation de livres',
            cover: 'https://www.agera.asso.fr/app/uploads/2020/08/Projet.jpg',
            images: [
                'https://www.omebatobo.fr/wp-content/uploads/agence-de-voyage.jpg',
                'https://www.parvisdesgentils.fr/wp-content/uploads/2020/02/agence-de-voyage.jpg'
            ],
            skills: 'Node.js, Express, MongoDB',
            github: 'https://github.com/unamezzora/Projet6MVG.git'
        },
    ];
    res.status(200).json(projet);
});


module.exports = app;