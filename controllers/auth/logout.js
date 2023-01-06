const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");
require("dotenv").config();
const { SECRET_KEY } = process.env;

const logout = async (req, res, next) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204).json({ message: "Logout success" });
};
module.exports = logout;
