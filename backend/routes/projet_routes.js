const express = require('express');
const router = express.Router();

const projetCtrl = require('../controllers/projet_ctrl');

router.get('/', projetCtrl.getAllProjet);
router.get('/:id', projetCtrl.getOneProjet);

module.exports = router;