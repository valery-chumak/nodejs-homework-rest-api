const contacts = require("../../models/contacts");
const { HttpError } = require("../../helpers");
const { getScheme } = require("../../schemes/contacts");
const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { error } = getScheme.validate(contactId);
    if (error) {
      throw HttpError(404, error.message);
    }
    const result = await contacts.removeContact(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};
module.exports = removeContact;
