const express = require('express');
const router = express.Router();
const {getResponses} = require('../controllers/chatbot_controller')

router.post('/', getResponses);

module.exports = router;