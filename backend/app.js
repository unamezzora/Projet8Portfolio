const express = require('express');
const path = require('path');

const projetRoutes = require('./routes/projet_routes');

/*
mongoose.connect("mongodb+srv://tatzemliakova:BgQsVONwry88jYAF@cluster0.fsw72.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
    */

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/projet', projetRoutes);



module.exports = app;