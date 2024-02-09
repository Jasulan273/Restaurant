const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');


router.post('/foods', foodController.createFood);

router.get('/foods', foodController.getAllFoods);


router.get('/foods/:id', foodController.getFoodById);


router.patch('/foods/:id', foodController.updateFood);


router.delete('/foods/:id', foodController.deleteFood);

module.exports = router;
