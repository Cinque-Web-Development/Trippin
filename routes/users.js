const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");

/*---------- Public Routes ----------*/
router.get("/", usersCtrl.index);

module.exports = router;
