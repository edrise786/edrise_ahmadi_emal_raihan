const express = require('express');
const { Car } = require('../models');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticateToken, async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', authenticateToken, async (req, res) => {
  const cars = await Car.findAll(); 
  res.json(cars);
});

module.exports = router;

