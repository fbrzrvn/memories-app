const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Difficult'],
    default: 'Easy',
  },
  serves: { type: Number, required: true },
  image: { type: String },
  ingridients: { type: [String], required: true },
  hoursToPrep: { type: Number, default: 0 },
  minutesToPrep: { type: Number, min: 0, max: 60, default: 0 },
  author: { type: String, ref: 'user' },
  name: { type: String },
  comments: { type: [String], ref: 'comment' },
  likes: { type: [String], default: [] },
  createdAt: { type: Date, default: new Date() },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
