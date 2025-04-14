// Auth middleware to check whether current user is authenticated or not

const authMiddleware = (req, res, next) => {
  console.log("This is from authMiddleware");
  next();
};

module.exports = {
  authMiddleware,
};
