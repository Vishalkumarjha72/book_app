const express = require('express');

const router = express.Router();

const Book = require('../model/Book');
// import Book from '../model/Book'

const bookcontroller = require('../controllers/books-controller');

router.get('/',bookcontroller.getAllBooks);
router.post('/',bookcontroller.addBook);
// router.get('/:id',bookcontroller)

module.exports = router; // router will be exported as module