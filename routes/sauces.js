//importation expess
const express = require('express');
//la fonction router
const router = express.Router();
//importation controllers/sauces.js
const saucesController = require('../controllers/sauces');
//importation middleware/auth.js
const auth = require('../middleware/auth');
//importation multer pour télécharger des fichiers
const multer = require('../middleware/multer');
// les routes 
router.post('/', auth, multer, saucesController.createSauce);
router.get('/', auth, saucesController.getSauce);
router.get('/:id', auth, saucesController.getSauceById);
router.put('/:id', auth, multer, saucesController.modifySauce);
router.delete('/:id', auth, saucesController.deleteSauce);
router.post('/:id/like', saucesController.likeSauce);
module.exports = router;
