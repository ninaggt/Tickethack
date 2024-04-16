const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://ninaggt:FCIkg8GBv1QB80BO@cluster0.z8somhu.mongodb.net/tickethack';
mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));