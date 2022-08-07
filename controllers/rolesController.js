exports.usersOnly = (req, res) => {
    res.status(200).json({message: "Welcome to User page"})
}

exports.staffOnly = (req, res) => {
    res.status(200).json({message: "Welcome to Staff page"})
}

exports.managersOnly = (req, res) => {
    res.status(200).json({message: "Welcome to Manager page"})
}

exports.adminOnly = (req, res) => {
    res.status(200).json({message: "Welcome to Admin page"})
}