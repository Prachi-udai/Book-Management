const express = require("express");

// DATABASE
const database = require("./database");


const booky = express();

/*
Route               /
Description         Get all the books
Access              PUBLIC
Parameter           NONE
Methods             GET
*/

booky.get("/",(req,res) => {
    return res.json({book: database.books});
});

/*
Route               /is
Description         Get specific book on ISBN
Access              PUBLIC
Parameter           isbn
Methods             GET
*/

booky.get("/is/:isbn", (req,res) => {
    const getSpecificBook = database.books.filter(
        (books) => books.ISBN === req.params.isbn
    );

    if(getSpecificBook.length === 0) {
        return res.json({error: `No book found for the ISBN of ${req.params.isbn}`})
    }
    return res.json({book: getSpecificBook});
});

/*
Route               /c
Description         Get books based on category
Access              PUBLIC
Parameter           category
Methods             GET
*/

booky.get("/c/:category", (req,res) => {
    const getSpecificBook = database.books.filter(
        (books) => books.category.includes(req.params.category)
    );

    if(getSpecificBook.length === 0) {
        return res.json({error: `No book found for the category of ${req.params.category}`})
    }
    return res.json({book: getSpecificBook});
});


/*
Route               /l
Description         Get books based on language
Access              PUBLIC
Parameter           language
Methods             GET
*/

booky.get("/l/:language", (req,res) => {
    const getSpecificBook = database.books.filter(
        (books) => books.language === req.params.language
    );

    if(getSpecificBook.length === 0) {
        return res.json({error: `No book found for the language ${req.params.language}`})
    }
    return res.json({book: getSpecificBook});
});

/*
Route               /authors
Description         Get all the authors
Access              PUBLIC
Parameter           NONE
Methods             GET
*/

booky.get("/author",(req,res) => {
    return res.json({author: database.author});
});

/*
Route               /author/name
Description         Get author by name
Access              PUBLIC
Parameter           name
Methods             GET
*/

booky.get("/author/:name", (req,res) => {
    const getSpecificAuthor = database.author.filter(
        author => author.name === req.params.name
    );

    if(getSpecificAuthor.length === 0) {
        return res.json({error: `No author found with name ${req.params.name}`})
    }
    return res.json({author: getSpecificAuthor});
});

/*
Route               /author/id/id
Description         Get author by id
Access              PUBLIC
Parameter           id
Methods             GET
*/

booky.get("/author/id/:id", (req,res) => {
    const getSpecificAuthor = database.author.filter(
        author => author.id === req.params.id
    );

    if(getSpecificAuthor.length === 0) {
        return res.json({error: `No author found with id ${req.params.id}`})
    }
    return res.json({author: getSpecificAuthor});
});

/*
Route               /author/book
Description         Get author by books
Access              PUBLIC
Parameter           isbn
Methods             GET
*/

booky.get("/author/books/:isbn", (req,res) => {
    const getSpecificAuthor = database.author.filter(
        (author) => author.books.includes(req.params.isbn) 
    );

    if(getSpecificAuthor.length === 0) {
        return res.json({error: `No author found with book ${req.params.isbn}`})
    }
    return res.json({author:getSpecificAuthor});

});

/*
Route               /pub
Description         Get all the publications
Access              PUBLIC
Parameter           NONE
Methods             GET
*/

booky.get("/pub",(req,res) => {
    return res.json({publication: database.publication});
});

/*
Route               /pub/name
Description         Get publication by name
Access              PUBLIC
Parameter           name
Methods             GET
*/

booky.get("/pub/:name", (req,res) => {
    const getSpecificPublication = database.publication.filter(
        (publication) => publication.name === req.params.name
    );

    if(getSpecificPublication.length === 0) {
        return res.json({error: `No publication found with name ${req.params.name}`})
    }
    return res.json({publication: getSpecificPublication});
});

/*
Route               /pub/id/id
Description         Get publication by id
Access              PUBLIC
Parameter           id
Methods             GET
*/

booky.get("/pub/id/:id", (req,res) => {
    const getSpecificPublication = database.publication.filter(
        (publication) => publication.id === req.params.id
    );

    if(getSpecificPublication.length === 0) {
        return res.json({error: `No publication found with id ${req.params.id}`})
    }
    return res.json({publication: getSpecificPublication});
});

/*
Route               /pub/book
Description         Get publications by books
Access              PUBLIC
Parameter           books
Methods             GET
*/

booky.get("/pub/books/:books", (req,res) => {
    const getSpecificPublication = database.publication.filter(
        (publication) => publication.books.includes(req.params.books) 
    );

    if(getSpecificPublication.length === 0) {
        return res.json({error: `No publication found with book ${req.params.books}`})
    }
    return res.json({publication:getSpecificPublication});

});

booky.listen(2500, () => {
    console.log("Server is up and running on port 2500.");
});