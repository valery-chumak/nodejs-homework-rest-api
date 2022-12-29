const { Contact } = require("../../models/contact");

const listContacts = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;

    const { page = 1, limit = 10, favorite = "" } = req.query;
    const skip = (page - 1) * limit;

    let result = await Contact.find({ owner }, "", { skip, limit }).populate(
      "owner",
      "email"
    );

    if (favorite === "true") {
      result = await Contact.find({ favorite: true, owner }, "", {
        skip,
        limit,
      }).populate("owner", "email");
    }

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = listContacts;
