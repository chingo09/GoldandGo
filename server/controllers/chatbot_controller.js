const express= require('express');
const openai = require('../config/openai');

const getResponses = async(req,res) =>
{ const {prompt} = req.body;
if (!prompt) {
        res.status(404).json({error: `Invalid Input`});
    };
try { 
    const response = await openai.chat.conpletions.create({
        model: 'gpt-4',
        messages: [{role: 'system', content: 'You are a helpful assistant'},
            ...prompt]
    });
    res.status(200).json({reply: response.choice[0].message.content.trim()});
}
catch (error) {
    res.status(500).json({error: `Internal server error`});
    console.log('Error in chatbot controller', error);
};
};

module.exports = {getResponses};