const fs = require("fs");
const sendProperResponse = require("../utils/sendProperResponse");

// =====> Sending a random user when user hit the api ===> /user/random
module.exports.getOneRandomUser = (req, res) => {
  // reading the user json file from data folder using fs modules
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

// =====> Sending all the users when user hit the api ==> user/all
module.exports.getAllUsers = (req, res) => {
  // reading the user json file from data folder using fs modules
  fs.readFile("./data/users.json", (err, data) => {
    if (err) {
      res.status(500).send("failed to load user");
      console.log(err);
    } else {
      const users = JSON.parse(data);
      res.send(sendProperResponse(200, "Successful", users));
    }
  });
};





// =======> Sending a specific number of users based on users query =====> /user/limit?q=2
module.exports.getSpecificNumberOfUsers = (req, res) => {


  // checking if the query is present and greater than 0
  if (req.query.q && req.query.q > 0) {
    const limit = req.query.q;

    // reading the user json file from data folder using fs modules
    fs.readFile("./data/users.json", (err, data) => {
      if (err) {
        res.status(500).send("failed to load user");
        console.log(err);
      } else {
        const users = JSON.parse(data);
        console.log(users.length, limit);

        const limitedUsers = users.slice(0, limit);
        res.send(sendProperResponse(200, `${limit} users of Total ${users.length}`, users));
      }
    });
  } else {
    // sending a instruction response in case of unavailability of query or if the query data is < 0
    res.json({
      success: false,
      message:
        "please enter a limit number (which should be greater than 0) after the 'q'as the following example",
      example: "/user/limit?q=5",
    });
  }
};



//  ==========> adding a new user to the users array  ========> /user/save

module.exports.saveAUser = (req, res) => {
  const newUser = req.body;

  // checking if the user object is missing any property
  if (
    !newUser.id ||
    !newUser.gender ||
    !newUser.name ||
    !newUser.contact ||
    !newUser.address ||
    !newUser.photoURL
  ) {
    res.json({
      status: false,
      message:
        "A user should contain all the details mentioned in the properties ",
      properties: ["id", "gender", "name", "contact", "address", "photoURL"],
    });
  } else {
    // reading the user json file from data folder using fs modules
    fs.readFile("./data/users.json", (err, data) => {
      if (err) {
        res.status(500).send("failed to load users");
        console.log(err);
      } else {
        const users = JSON.parse(data);

        // checking if the user is already existed
        const existedUser = users.find(
          (user) =>
            user.id === Number(newUser.id) &&
            user.name === newUser.name &&
            user.address === newUser.address &&
            user.gender === newUser.gender &&
            user.contact === newUser.contact &&
            user.photoURL === newUser.photoURL
        );

        if (existedUser) {
          res.json({ message: "this user already exist" });
        } else {
          users.push(newUser);

          fs.writeFile("./data/users.json", JSON.stringify(users), (err) => {
            console.log(err);
            console.log("file written");
            res.send(sendProperResponse(201, "success", users));
          });
        }
      }
    });
  }
};
