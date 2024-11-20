import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();
// Routes
router.post('/', async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            });
        }

        const newBook = { title, author, publishYear };
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
});


//Route for get all books from database
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
});


// Route to get a single book by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Fetch the book by ID
        const book = await Book.findById(id); // Use findById for a single document
        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }

        return res.status(200).json(book);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
});


// Route to get update a book
// Route to update a book by ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, publishYear } = req.body;

        // Validate required fields
        if (!title || !author || !publishYear) {
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            });
        }

        // Update the book
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            { title, author, publishYear },
            { new: true } // Ensures the response contains the updated document
        );

        if (!updatedBook) {
            return res.status(404).send({ message: "Book not found" });
        }

        return res.status(200).send({
            message: "Book updated successfully!",
            book: updatedBook, // Return updated book details
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;


        // Update the book
        const book = await Book.findByIdAndDelete(id);

        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }

        return res.status(200).send({
            message: "Book deleted successfully!",
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;