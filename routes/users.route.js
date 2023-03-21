const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/random', (req, res) => {
    res.send('a random user is here')
} )


router.get('/all', (req, res) => {
    res.send('all the users are here')
} )


module.exports = router ;






// const numbers = [4, 5, 6, 7, 8, 9]

// const randomIndex =  Math.floor(Math.random() * numbers.length) ;


// console.log(randomNumber);
