const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController')

router.post('/create',characterController.createBio);
router.get('/all-bio',characterController.allBio);
router.get('/detail/:_id',characterController.bioById);

module.exports=router;