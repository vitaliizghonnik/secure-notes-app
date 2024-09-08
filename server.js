const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json()); 

// Global array to store results
const storeNotes = []; 

// POST endpoint to add the notes to the global array
app.post('/addnote', (req, res) => {
    const { description, completed, percentage } = req.body;

    // Validate the input data
    if (typeof description !== 'string' || typeof completed !== 'boolean' || typeof percentage !== 'number' || 
        percentage < 0 || percentage > 100) {
        return res.status(400).json({ error: 'Invalid input data. Ensure correct types and percentage between 0 and 100.' });
    }

    // Create a note object
    const note = {
        description,
        completed,
        percentage
    };

    // Add the result to the global array
    storeNotes.push(note);

    res.json({ message: 'Note added to the array', storeNotes });
});

// GET endpoint to retrieve all notes
app.get('/notes', (req, res) => {
    res.json({ storeNotes });
});

// GET endpoint to retrieve a specific note

// Start the server
app.listen(port, () => {
    console.log(`Multiply API listening at http://localhost:${port}`);
});