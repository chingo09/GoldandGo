// app.js
const express = require('express');
const app = express();
const chatbotroute = require('./routes/chatbotroute');

app.use(express.json());  // ✅ Needed to parse JSON body

app.use('/api/chatbot', chatbotroute);

module.exports = app;
