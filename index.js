const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users.route');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 5000 ;


// Global middle wares
app.use(express.json());
app.use(cors());


// routes 
app.use('/user', userRoutes)




// checking api response
app.get('/', (req, res) => {
    res.send("Random user server running successfully")
})


// Error Response for non-existing routes
app.all("*", (req, res) => {
    res.send("No routes found")
})



// Global error Handler
app.use(errorHandler) ;


// listening api and checking on console
app.listen(port, () => {
    console.log(`Random user api running on port ${port}`);
})


// closing the express app on unhandled error
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
      process.exit(1);
    })
});