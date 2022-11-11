const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// creating the schema using const bookschema = new Schema ({ 'objects' }) 
const bookschema = new Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    available:{
        type: Boolean,
    }
}) 

// Now our model is created and we will export it to mongodb and mongodb will create it as a new collection of this schema name 

// Now we will added to the schema database

module.exports = mongoose.model("Book",bookschema);

// By default it will be store it as "books" in mongoose as it is stored in the plural form and starts with lowercase alphabet.