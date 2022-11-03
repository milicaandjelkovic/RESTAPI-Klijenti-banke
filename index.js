require('dotenv').config();
  
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Baza je povezana');
})


const app = express();

app.use(express.json()); //ono sto dodje sa klijentske strane pokupi kao JSON fajl

app.listen(3000, () => {
    console.log(`Server je pokrenut na portu ${3000}`)
})