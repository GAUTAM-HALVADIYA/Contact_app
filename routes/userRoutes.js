const express = require("express");
const router = express.Router();
const {registerUser, loginUser, creatUser} = require("../controllers/userController")
const validationToken = require("../middleware/validationTokenHandler")

router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/current", validationToken, creatUser)

module.exports = router;