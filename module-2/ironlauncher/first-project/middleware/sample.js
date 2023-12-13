const myFunc = (req, res, next) => {
  console.log('Here is the middleware!');
  next();
}

module.exports = myFunc;