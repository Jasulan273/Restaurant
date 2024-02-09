const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb+srv://texnop30618:Jasulan@cluster0.vg9yi0c.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());


const menuRoute = require('./routes/menuRoute');
const contactsRoute = require('./routes/contactsRoute');
const homeRoute = require('./routes/homeRoute');

app.use('/', homeRoute);
app.use('/', contactsRoute);
app.use('/', menuRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
