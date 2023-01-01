const express = require("express");
const router = express.Router();
const сontactСontroller = require("../../controllers/contacts");
const { isValidId } = require("../../middlewares");
const validateBody = require("../../middlewares/validateBody");
const { schemas } = require("../../models/contact");

router.get("/", сontactСontroller.listContacts);

router.get("/:contactId", isValidId, сontactСontroller.getContactById);

router.post("/", validateBody(schemas.addSchema), сontactСontroller.addContact);

router.delete("/:contactId", isValidId, сontactСontroller.removeContact);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  isValidId,
  сontactСontroller.updateContact
);

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateFavoriteSchema),
  isValidId,
  сontactСontroller.updateFavorite
);

module.exports = router;
