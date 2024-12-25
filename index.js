const connectToMongo = require('./db'); // Import the connectToMongo function
const express = require('express');
const cors = require('cors');

// Call the connectToMongo function to establish a connection to MongoDB
connectToMongo();

const app = express();

// Use environment variable for the port or fallback to 5000
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// API Routes
app.use('/api/auth', require('./routes/auth')); // Adjust the path if needed

// Fallback Route for Undefined Endpoints
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
