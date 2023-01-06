const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handleMongooseError = require("../helpers/handleMongooseError");

const subscriptions = ["starter", "pro", "business"];

const userScheme = new Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: subscriptions,
    default: "starter",
  },
  avatarURL: {
    type: String,
  },
  token: {
    type: String,
    default: null,
  },
});
userScheme.post("save", handleMongooseError);

const registerScheme = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...subscriptions),
});
const loginScheme = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
const updateSubscriptionSchema = Joi.object({
  subscription: Joi.valid("starter", "pro", "business").required(),
});
const schemas = {
  registerScheme,
  loginScheme,
  updateSubscriptionSchema,
};
const User = model("user", userScheme);

module.exports = { User, schemas };
