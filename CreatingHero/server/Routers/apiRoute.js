const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController')

router.post('/create',characterController.createBio);
router.get('/all-bio',characterController.allBio);
router.get('/detail/:_id',characterController.bioById);
router.put('/update/:_id',characterController.update);
router.delete('/delete/:_id',characterController.deleteCharacter);
router.get('/home',characterController.bioHome);
router.get('/search/:key',characterController.searchWithName);

module.exports=router;