require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const recipeRoute = require('./routes/recipes.js');

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/recipes', recipeRoute);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server up and running on ${PORT}`))
  )
  .catch(err => console.log(err.message));

mongoose.set('useFindAndModify', false);
