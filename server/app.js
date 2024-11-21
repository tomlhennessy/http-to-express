// Import and initialize server
const express = require('express');
const app = express();

// middleware to parse JSON bodies
app.use(express.json());


// STEP 1: Import and initialize server, configure for JSON requests
const port = 5001

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

// HTTP Server: Handle route with param (/users/:userId) sending plain-text response

app.get(`/users/:userid`, (req, res) => {
    const userId = req.params.userId; // extract userId from route params
    res.status(200).send(`User details for userId: ${userId}`)
})
