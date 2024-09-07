// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// require('dotenv').config();
// const connectDB = require('./config/db');
// const router = require('./routes');

// const app = express();

// // Increase the limit for JSON payloads (e.g., 10mb)
// app.use(express.json({ limit: '10mb' }));

// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true
// }));

// app.use(cookieParser());

// app.use("/api", router);

// const PORT = process.env.PORT || 8080;

// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log('connected to DB');
//         console.log('server is running on ' + PORT);
//     });
// });


// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// require('dotenv').config();
// const connectDB = require('./config/db'); // Ensure path is correct
// const router = require('./routes');

// const app = express();

// // Increase the limit for JSON payloads (e.g., 10mb)
// app.use(express.json({ limit: '10mb' }));

// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true
// }));

// app.use(cookieParser());

// app.use("/api", router);

// const PORT = process.env.PORT || 8080;

// // Connect to the database and start the server
// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log('Server is running on port ' + PORT);
//     });
// });


const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db'); // Ensure path is correct
const router = require('./routes');

const app = express();

// Increase the limit for JSON payloads (e.g., 10mb)
app.use(express.json({ limit: '10mb' }));

// CORS configuration
app.use(cors({
    origin: 'https://savankoppha-x.vercel.app', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // List allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // List allowed headers
    credentials: true, // Allow cookies or authentication information
}));

// Middleware for parsing cookies
app.use(cookieParser());

// Use router for API routes, prefixed with /api
app.use("/api", router);

// Set the port from environment variables or default to 8080
const PORT = process.env.PORT || 8080;

// Connect to the database and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on port ' + PORT);
    });
}).catch((err) => {
    console.error('Failed to connect to the database', err);
});
