const Joi = require("joi");
const addScheme = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});
const getScheme = Joi.string().min(1).max(21).required();
module.exports = { addScheme, getScheme };
