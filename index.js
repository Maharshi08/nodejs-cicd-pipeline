const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', apiRoutes); // Mount API routes

app.get('/', (req, res) => {
  res.send('🚀 Welcome to our Advanced Node.js App with CI/CD!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', message: 'Healthy ✅' });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Server
app.listen(port, () => {
  console.log(`⚡ Server running at http://localhost:${port}`);
});
