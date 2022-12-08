const HttpError = require("./HttpError");
const { getScheme } = require("../schemes/contacts");
const { addScheme } = require("../schemes/contacts");
const validationContacts = (req, res, next) => {
  const { contactId } = req.params;
  const { error } = getScheme.validate(contactId);
  if (error) {
    throw HttpError(404, error.message);
  }
  //check if req.body is not empty
  if (Object.keys(req.body).length) {
    const { error } = addScheme.validate(req.body);
    if (error) {
      throw HttpError(404, "missing fields");
    }
  }
  next();
};
module.exports = validationContacts;
