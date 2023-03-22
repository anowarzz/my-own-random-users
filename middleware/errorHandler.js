const errorHandler = (error,req,res, next) => {
  if (error) {
    res.send(error.message);
    console.log(error);
    
  }
};

module.exports = errorHandler;
