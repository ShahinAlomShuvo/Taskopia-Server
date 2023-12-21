const express = require("express");
const { createToken, clearToken } = require("../../api/authentication");
const router = express.Router();

router.post("/jwt", createToken);
router.post("/logout", clearToken);
module.exports = router;
