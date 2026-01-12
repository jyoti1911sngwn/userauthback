require("dotenv").config();
const connectToMongo = require('./db'); // Import the connectToMongo function
const express = require('express');
const cors = require('cors');
const passport = require("passport");
// Call the connectToMongo function to establish a connection to MongoDB
require("./controller/googleAuth"); 
connectToMongo();
const app = express();
app.use(passport.initialize());

// Use environment variable for the port or fallback to 5000
const port = process.env.PORT || 5000;

// Middleware
// app.use(cors()); // Allow cross-origin requests
app.use(
  cors({
    origin: "https://userauthfront.vercel.app",
    credentials: true,
  })
);

app.use(express.json()); // Parse JSON bodies

// API Routes
app.use('/api/auth', require('./routes/auth')); // Adjust the path if needed

app.use('/', require('./routes/googleroutes')); // Google OAuth routes

// Fallback Route for Undefined Endpoints
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
