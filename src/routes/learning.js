const express = require('express');
const router = express.Router();

// controller
const learningController = require('../app/controllers/LearningController');
// route 
router.get('/', learningController.index);

module.exports = router;