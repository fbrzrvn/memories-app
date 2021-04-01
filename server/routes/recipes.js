const express = require('express');
const {
  getRecipes,
  createRecipe,
  deleteRecipe,
  getRecipe,
} = require('../controllers/recipes.js');

const router = express.Router();

router.get('/', getRecipes);
router.get('/:id', getRecipe);
router.post('/api', createRecipe);
router.delete('/api/:id', deleteRecipe);

module.exports = router;
