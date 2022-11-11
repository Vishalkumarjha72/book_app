// RAEHw2jLK2cT2w4N
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');

const app = express();


//Middleware
app.use(express.json());
// all of the thing will be handled inside the router
app.use('/books',router);  //localhost:5000/books

mongoose.connect(
    "mongodb+srv://admin1:adminrishav@cluster0.ercjkxi.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("Connected to database"))
.then(()=>{
    app.listen(5000)
})
.catch((err)=> console.log("error"));
