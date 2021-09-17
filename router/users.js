const express = require("express");
const createUser = require("../controller/users/create");
const router = express.Router();

router.post("/", createUser);

module.exports = router;
