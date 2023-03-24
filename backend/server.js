const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const morgan = require('morgan');

//Set port
app.set('port', process.env.PORT || 5000);
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
//Routes
app.get('/', (req, res) => {
  res.json({ working: 'fine' });
});
//Database

//Starting server
app.listen(app.get('port'), () => {
  console.log(`Server Running On Port ${app.get('port')}`);
});
