const express = require("express");
const router = express.Router();

const userController = require("../controllers/users/userController");
router.post("/users", userController.userRegister);
router.post("/login", userController.userLogin);

module.exports = router;