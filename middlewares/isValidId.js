const { isValidObjectId } = require("mongoose");
const HttpError = require("../helpers/HttpError");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(HttpError(404, "Invalid Id"));
  }
  next();
};
module.exports = isValidId;
