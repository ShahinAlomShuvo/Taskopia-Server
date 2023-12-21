const express = require("express");
const { saveUserInfo, getUserInfo } = require("../../api/users");

const router = express.Router();

router.post("/users", saveUserInfo);
router.get("/users", getUserInfo);

module.exports = router;
