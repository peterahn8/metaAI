const express = require('express');
// const readline = require('readline');

const {
  generateDescription,
  generateApplications,
  generateImage,
} = require('../controllers/openaiController');

// Express server
const app = express();
app.listen(4000, () => console.log('Listening for requests on port 4000.'));

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.post('/openai/description', generateDescription);
app.post('/openai/applications', generateApplications);
app.post('/openai/image', generateImage);

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('Ask GPT about a technology: \n', generateDescription);
// rl.question('Ask GPT about a technology: \n', generateApplications);
// rl.question('Describe your thumbnail: \n', generateImage);
