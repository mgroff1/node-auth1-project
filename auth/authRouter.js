const router = require("express").Router();
console.log("authRouter starting....\n");
const {
  authorize,
  verifyNewUser
} = require("./authRequiredMiddleware");

//import controller functions
const { createUser, userLogin } = require("../routers/userControllers");

//register new user
router.route("/register").post(verifyNewUser, createUser);
//login with username/password in the body
router.route("/login").post(authorize, userLogin);

module.exports = router;
