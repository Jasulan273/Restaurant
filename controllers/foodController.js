const Food = require('../models/foodModel');

exports.createFood = async (req, res) => {
  try {
    const { name, price, rating } = req.body;
    const newFood = new Food({ name, price, rating });
    await newFood.save();
    res.status(201).json(newFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }
    res.json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.updateFood = async (req, res) => {
  try {
    const { name, price, rating } = req.body;
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }
    food.name = name;
    food.price = price;
    food.rating = rating;
    await food.save();
    res.json(food);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deleteFood = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }
    await food.remove();
    res.json({ message: 'Food deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
