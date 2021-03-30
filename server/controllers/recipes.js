const Recipe = require('../models/recipe');

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createRecipe = async (req, res) => {
  const recipe = req.body;
  const newRecipe = new Recipe({ ...recipe });
  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports = { getRecipes, createRecipe };
