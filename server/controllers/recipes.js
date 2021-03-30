const getRecipes = (req, res) => {
  try {
    res.status(200).json({ message: 'Here all recipes' });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = { getRecipes };
