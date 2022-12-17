const express = require("express");
const router = express.Router();
const сontactСontroller = require("../../controllers/contacts");
const { validationContacts, isValidId } = require("../../middlewares");

router.use("/:contactId", isValidId, validationContacts);

router.get("/", сontactСontroller.listContacts);

router.get("/:contactId", isValidId, сontactСontroller.getContactById);

router.post("/", сontactСontroller.addContact);

router.delete("/:contactId", isValidId, сontactСontroller.removeContact);

router.put("/:contactId", isValidId, сontactСontroller.updateContact);

router.patch(
  "/:contactId/favorite",
  isValidId,
  сontactСontroller.updateFavorite
);

module.exports = router;
