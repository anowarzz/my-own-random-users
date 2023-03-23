const express = require("express");
const router = express.Router();
const path = require("path");
const usersController = require('../controllers/users.controller.js')


// Get a random user
router.get("/random", usersController.getOneRandomUser );

// Get all the users
router.get("/all", usersController.getAllUsers);

// Get a limited no of user based on query
router.get("/limit", usersController.getSpecificNumberOfUsers);

// Save a user to the the user array
router.post('/save', usersController.saveAUser) ;

// Update a user information based on the id
router.patch('/update/:id', usersController.updateAUser)

// Delete a user from the user list
router.delete('/delete/:id', usersController.deleteAUser)

module.exports = router;

