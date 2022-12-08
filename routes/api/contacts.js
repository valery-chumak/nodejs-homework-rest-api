const express = require("express");
const router = express.Router();
const сontactСontroller = require("../../controllers/contacts");
const { validationContacts } = require("../../helpers");

router.use("/:contactId", validationContacts);

router.get("/", сontactСontroller.listContacts);

router.get("/:contactId", сontactСontroller.getContactById);

router.post("/", сontactСontroller.addContact);

router.delete("/:contactId", сontactСontroller.removeContact);

router.put("/:contactId", сontactСontroller.updateContact);

module.exports = router;
