const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },

    email: {
        type: String
    },
    mobile_no: {
        type: Number
    },
    gender: {
        type: String
    },
    password: {
        type: String
    },
    confirm_password: {
        type: String
    }
})

const user = mongoose.model('user', userSchema)

module.exports = user