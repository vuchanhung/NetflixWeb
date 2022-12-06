const express = require('express');
const mongoose= require('mongoose');
const dotenv = require('dotenv');
const app =express();
const authRoute=require('./routes/auth');
const dbs=require('./config/db');

dotenv.config();
//connect db
dbs.connect();  
app.use(express.json());

app.use('/api/auth',authRoute);

app.listen(8800, ()=>{
    console.log('Back end server is running!');
})