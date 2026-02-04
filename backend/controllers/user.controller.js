import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { ErrorHandler } from "../utilities/errorHandler.utility.js";
const registerUser = asyncHandler(async (req, res, next) => {
  const { fullName, username, password, gender } = req.body;

  if (!fullName || !username || !password || !gender) {
    return next(new ErrorHandler("All fields are required", 400));
  }
  const user = await User.findOne({ username });
  if (user) {
    return next(new ErrorHandler("Username already exists", 400));
  }
  const newUser = await User.create({ fullName, username, password, gender });

  res.send("register user");
});
export { registerUser };
