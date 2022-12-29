const express = require("express");
const router = express.Router();
const сontactСontroller = require("../../controllers/contacts");
const { isValidId, authenticate } = require("../../middlewares");
const validateBody = require("../../middlewares/validateBody");
const { schemas } = require("../../models/contact");

router.get("/", authenticate, сontactСontroller.listContacts);

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  сontactСontroller.getContactById
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  сontactСontroller.addContact
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  сontactСontroller.removeContact
);

router.put(
  "/:contactId",
  authenticate,
  validateBody(schemas.addSchema),
  isValidId,
  сontactСontroller.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  isValidId,
  сontactСontroller.updateFavorite
);

module.exports = router;
