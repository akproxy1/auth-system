const jwt = require('jsonwebtoken')
require('dotenv').config()
exports.auth = (req, res, next) => { 
    if (!req.headers.authorization) {
        return res.status(401).json({message: "Unauthorized! Please login"})
    }
    const token = req.headers.authorization.split(" ")[1]
    try {
        const decoded = jwt.verify(token, process.env.SECRET)
        req.user = decoded.user
        next()
    } catch (error) {
        return res.status(401).json({message: "invalid token"})
    }
}

exports.checkIfUser = (req, res, next) => {
    if (req.user.role !== "user") {
        return res.status(401).json({message: "This route is restricted to Users"})
    }
    next()
}
exports.checkIfStaff = (req, res, next) => {
    if (req.user.role !== "staff") {
        return res.status(401).json({message: "This route is restricted to Staff"})
    }
    next()
}
exports.checkIfManager = (req, res, next) => {
    if (req.user.role !== "manager") {
        return res.status(401).json({message: "This route is restricted to Managers"})
    }
    next()
}
exports.checkIfAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(401).json({message: "This route is restricted to Admins"})
    }
    next()
}
