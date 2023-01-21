const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const verify = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (user) {
    await User.findByIdAndUpdate(user._id, {
      verificationToken: null,
      verify: true,
    });
    res.status(200).json({ message: "Verification successful" });
  } else {
    throw HttpError(404, "User not found");
  }
};
module.exports = verify;