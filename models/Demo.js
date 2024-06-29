const mongoose = require('mongoose');

const demoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    babyStage: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Demo', demoSchema);
