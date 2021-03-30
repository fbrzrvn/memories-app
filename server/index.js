require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Conntected with express' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
