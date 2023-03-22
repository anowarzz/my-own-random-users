const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/random', (req, res) => {

    fs.readFile('data/users.json', (err, data) => {
    if(err){
        res.send('failed to load user')
        console.log(err);
    }  
    else{

        const users = JSON.parse(data)
        const randomIndex = Math.floor(Math.random() * users.length)
       const randomUser = users[randomIndex]
       res.status(200).send(randomUser);
       
      
    } 
    })

} )


router.get('/all', (req, res) => {
    res.send('all the users are here')
} )


module.exports = router ;






// const numbers = [4, 5, 6, 7, 8, 9]

// const randomIndex =  Math.floor(Math.random() * numbers.length) ;


// console.log(randomNumber);
