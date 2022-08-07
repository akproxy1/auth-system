const express = require("express");
const {
  register,
  login,
  logout,
  forgotPassword,
  resetPasswordGet,
  resetPasswordPost,
} = require("../controllers/authController");
const {
  usersOnly,
  staffOnly,
  managersOnly,
  adminOnly,
} = require("../controllers/rolesController");
const { body } = require("express-validator");
const {
  auth,
  checkIfAdmin,
  checkIfUser,
  checkIfStaff,
  checkIfManager,
} = require("../middlewares/auth");
const router = express.Router();

router.post(
  "/register",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  register
);

router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  login
);

router.get("/logout", auth, logout);

router.all("/user", auth, checkIfUser, usersOnly);
router.all("/admin", auth, checkIfAdmin, adminOnly);
router.all("/staff", auth, checkIfStaff, staffOnly);
router.all("/manager", auth, checkIfManager, managersOnly);

router.post("/password-recovery", forgotPassword);
router.get("/reset-password/:id/:token", resetPasswordGet);
router.post("/reset-password/:id/:token", resetPasswordPost);

module.exports = router;
