const fs = require("fs");

// Sending a random user when user hit the api ===> /user/random

module.exports.getOneRandomUser = (req, res) => {
  fs.readFile("./data/users.json", (err, data) => {
    if (err) {
      res.status(500).send("failed to load user");
      console.log(err);
    } else {
      const users = JSON.parse(data);
      const randomIndex = Math.floor(Math.random() * users.length);
      const randomUser = users[randomIndex];
      res.status(200).send(randomUser);
    }
  });
};




// Sending all the users when user hit the api ==> user/all
module.exports.getAllUsers = (req, res) => {
  fs.readFile("./data/users.json", (err, data) => {
    if (err) {
      res.status(500).send("failed to load user");
      console.log(err);
    } else {
      const users = JSON.parse(data);
      res.status(200).send(users);
    }
  });
};
