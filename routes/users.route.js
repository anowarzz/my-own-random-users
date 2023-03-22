const express = require("express");
const router = express.Router();
const path = require("path");
const usersController = require('../controllers/users.controller.js')


router.get("/random", usersController.getOneRandomUser );

router.get("/all", usersController.getAllUsers);

module.exports = router;

