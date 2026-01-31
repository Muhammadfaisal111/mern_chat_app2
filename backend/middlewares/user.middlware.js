const function1 = (req, res, next) => {
  console.log("Middleware function1 is executed.");
  next();
};
const function2 = (req, res, next) => {
  console.log("Middleware function2 is executed.");
  next();
};
export { function1, function2 };
