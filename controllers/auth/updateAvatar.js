const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models/user");
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  const filename = `${_id}_w250_h250_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);

  async function resizeImage() {
    const image = await Jimp.read(resultUpload);
    image.resize(250, 250);
    image.cover(250, 250);
    image.write(resultUpload);
  }

  await fs.rename(tempUpload, resultUpload);
  resizeImage();

  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.status(200).json({
    avatarURL,
  });
};

module.exports = updateAvatar;
