const mongoose = require('mongoose');

const AnimalSchema = new  mongoose.Schema({
    name: String,
    location: String,
    numberOfLegs: Number,
    size: String
}, {timestamps: true});


mongoose.model('Animal', AnimalSchema);