import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
const registerUser = asyncHandler((req, res, next) => {
  const { fullName, email, password, gender } = req.body;


  if (!fullName || !email || !password || !gender) {
    return res.status(400).json({ message: "All fields are required" });
  }
  return res.status(200).json({ message: "Validation passed", data: req.body });
});
export { registerUser };
