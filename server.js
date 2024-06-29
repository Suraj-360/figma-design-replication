const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const demoRoutes = require('./routes/demo');
const path = require('path');

const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/bookDemoForm', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Connection error', error);
});

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', demoRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});