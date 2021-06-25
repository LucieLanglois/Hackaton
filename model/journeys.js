var mongoose = require('mongoose')

var journeySchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    departureTime: String,
    price: Number,
})
console.log(journeySchema);
var journeyModel = mongoose.model('journeys', journeySchema)

module.exports = journeyModel;