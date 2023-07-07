const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const pcnRoutes = require('./routes/pcnRoutes');

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

// app.use('/api/auth', authRoutes);
// app.use('/api/pcn', pcnRoutes);
app.use('/', authRoutes);
// app.use('/pcn', pcnRoutes);
app.use('/', pcnRoutes);


app.listen(process.env.PORT || 8000, () => {
  console.log(`Listening on port ${process.env.PORT || 8000}...`);
});
