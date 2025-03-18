import express from "express";
import bodyParser from "body-parser"; // for parsing incoming request bodies
import cors from "cors"; // for enabling cross-origin resource sharing
import dotenv from "dotenv"; // for loading environment variables from a .env file
import productRoutes from "./routes/productRoutes.js"; // import the routes

import connectDB from "./config/database.js"; // connect to the database

const app = express();

dotenv.config();

connectDB();

app.use(bodyParser.json());
app.use(
    cors({
        origin: process.env.ORIGIN,
        credentials: true,
    }),
);

app.get("/", (req, res) => {
    res.send("Server is running!");
    req.next();
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
