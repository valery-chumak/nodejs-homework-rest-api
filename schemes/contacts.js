const Joi = require("joi");
const addScheme = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});
const getScheme = Joi.string().min(1).max(30).required();
const updateFavoriteSchema = Joi.boolean().required();
module.exports = { addScheme, getScheme, updateFavoriteSchema };
