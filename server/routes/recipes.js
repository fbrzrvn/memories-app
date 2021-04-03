const express = require('express');
const { auth } = require('../middleware/auth.js');
const {
  getRecipes,
  createRecipe,
  deleteRecipe,
  getRecipe,
} = require('../controllers/recipes.js');

const router = express.Router();

router.get('/', getRecipes);
router.get('/:id', getRecipe);
router.post('/api', auth, createRecipe);
router.delete('/api/:id', auth, deleteRecipe);

module.exports = router;
