let mongoose = require('mongoose');

let bookingSchema = mongoose.Schema({
    username: {type: String, required: true},
    roomID: {type: String, required: true},
    startTime: {type: String, required: true},
    duration: {type: String, required: true},
    endTime: {type: String, required: true},
    bookingDate: {type: String, required: false}
});

let Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;