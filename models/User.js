const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userRoles: {
        type: String,
        enum: ["user", "staff", "manager", "admin"],
        default: "user"
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)