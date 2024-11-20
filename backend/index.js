import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for enabling CORS
app.use(cors()); // Place it here so all requests can pass through

// Middleware for parsing JSON requests
app.use(express.json());

// Books routes
app.use("/books", booksRoute);

// Database Connection
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is running well on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Database connection error:", err.message);
    });
