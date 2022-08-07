const User = require("../models/User");
const bcrypt = require("bcrypt");
let password = "adminpassword";

exports.seedAdmin = async () => {
  try {
    let admin = await User.findOne({ userRoles: "admin" });
    if (admin) {
      console.log("Admin account already exists");
      return;
    }
    const passwordHash = await bcrypt.hash(password, 10);
    await User.create({
      firstName: "Administrator",
      lastName: "Admin",
      email: "admin@gmail.com",
      userRoles: "admin",
      password: passwordHash,
    });
    console.log("admin account created");
    return;
  } catch (error) {
    throw error;
  }
};
