// Load variables from .env file
if(process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

// Import dependencies from package.json file
const express = require('express');
const cors = require('cors');
const connectToDb = require("./config/connectToDb");
const notesController = require("./controllers/notesController");

// Create an express app
const app = express();

// Confige express app
app.use(express.json());
app.use(cors());

// Connect to database
connectToDb();

// Routing
app.get("/notes", notesController.fetchNotes);

app.get("/notes/:id", notesController.fetchNote);

app.post('/notes', notesController.createNote);

app.put('/notes/:id', notesController.updateNote)

app.delete('/notes/:id', notesController.deleteNote);

// Start the server
app.listen(process.env.PORT);