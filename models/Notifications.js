let mongoose = require('mongoose')
let Notifications = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, { collection: 'notifications' })

module.exports = mongoose.model('Notifications', Notifications);