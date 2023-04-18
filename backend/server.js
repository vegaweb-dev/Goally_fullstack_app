const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
connectDB();
const app = express();
const morgan = require('morgan');

//Set port
app.set('port', process.env.PORT || 5000);
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));

//Routes
app.use('/api/goals', require('./routes/goalRoutes'));
app.use(errorHandler);
//Database

//Starting server
app.listen(app.get('port'), () => {
  console.log(`Server Running On Port ${app.get('port')}`);
});
