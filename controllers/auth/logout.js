const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");
require("dotenv").config();
const { SECRET_KEY } = process.env;

const logout = async (req, res, next) => {
  const { id } = jwt.verify(token, SECRET_KEY);
  const user = await User.findById(id);

  if (!user) {
    next(HttpError());
  }
};
module.exports = logout;
