const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/users');
const carRoutes = require('./routes/cars');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/cars', carRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
