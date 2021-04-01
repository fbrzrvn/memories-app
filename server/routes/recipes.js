const express = require('express');
const {
  getRecipes,
  createRecipe,
  deleteRecipe,
} = require('../controllers/recipes.js');

const router = express.Router();

router.get('/', getRecipes);
router.post('/api', createRecipe);
router.delete('/api/:id', deleteRecipe);

module.exports = router;
