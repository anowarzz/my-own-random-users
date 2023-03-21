const errorHandler = (error, res, req, next) => {
  if (error) {
    res.send("Something went wrong");
  }
};

module.exports = errorHandler;
