const express = require('express');
const router = express.Router();
const Demo = require('../models/Demo');

router.post('/book-demo', async (req, res) => {
    const { name, email, phone, babyStage } = req.body;
    console.log(req.body);
    try {
        const newDemo = new Demo({ name, email, phone, babyStage });
        await newDemo.save();
        res.status(201).send('Demo session booked successfully!');
    } catch (error) {
        console.error(error);
        res.status(400).send('Failed to book demo session.');
    }
});

module.exports = router;

