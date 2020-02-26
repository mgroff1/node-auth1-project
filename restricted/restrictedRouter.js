const router = require("express").Router();
console.log("restrictedRouter running....\n");
const { restricted } = require("../auth/authRequiredMiddleware");

//import controller functions
const {
  getAllUsers,
  logout,
  deleteUser,
  updateUser
} = require("../routers/userControllers");

//get all users IF successful login
router.route("/users").get(restricted, getAllUsers);

router
  .route("/users/:id")
  .delete(restricted, deleteUser)
  .put(restricted, updateUser);

//logout function
router.route("/logout").delete(logout);

module.exports = router;
