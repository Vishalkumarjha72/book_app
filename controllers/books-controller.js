
const Book = require('../model/Book');

const getAllBooks = async (req,res,next) =>{
    let books;
    // Since it is server side block so we always use  "TRY CATCH"
    try{
        books =await Book.find(); // it will give ALL the things of the Book if we dont provide argument.
        // now books(variable) holds all of the books inside it.
    }catch(err){
        console.log(err);
    }

    // Case where books not found
    if(!books){
        return res.status(404).json({message:"No product found"});
    }
    return res.status(200).json({books});  // else case
};


const getByid = async(req,res,next) =>{
    const id = req.param.id;
     let book;
     try{
        book = await Book.findById(id);
     }catch(err){
        console.log(err);
     }
     if(!books){
        return res.status(404).json({message:"No product found"});
    }
    return res.status(200).json({books});  // else case

}

const addBook = async (req,res,next)=>{
    const { name,author,description ,price,available} = req.body;  //destructure
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
        });
        await book.save();

    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(500).json({message: "unable to add"});
    }
    return res.status(201).json({book});
};




exports.getAllBooks = getAllBooks;
exports.addBook = addBook;