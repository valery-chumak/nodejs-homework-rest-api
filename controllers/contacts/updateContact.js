const contacts = require("../../models/contacts");
const { HttpError } = require("../../helpers");
const { addScheme } = require("../../schemes/contacts");
const updateContact = async (req, res, next) => {
  try {
    const { error } = addScheme.validate(req.body);
    if (error) {
      throw HttpError(404, "missing fields");
    }
    const { contactId } = req.params;
    console.log(req.body);
    const result = await contacts.updateContact(contactId, req.body);
    console.log(result);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = updateContact;
