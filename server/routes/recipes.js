const express = require('express');
const { auth } = require('../middleware/auth.js');
const {
  getRecipes,
  createRecipe,
  deleteRecipe,
  getRecipe,
  updateRecipe,
  likeRecipe,
} = require('../controllers/recipes.js');

const router = express.Router();

router.get('/', getRecipes);
router.get('/:id', getRecipe);
router.post('/api', auth, createRecipe);
router.delete('/api/:id', auth, deleteRecipe);
router.patch('/api/:id', auth, updateRecipe);
router.patch('/api/:id/like', auth, likeRecipe);

module.exports = router;
