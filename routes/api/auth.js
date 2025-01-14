const express = require("express");
const router = express.Router();
const validateBody = require("../../middlewares/validateBody");
const { schemas } = require("../../models/user");

const userController = require("../../controllers/auth");
const { authenticate, upload } = require("../../middlewares");

router.post(
  "/register",
  validateBody(schemas.registerScheme),
  userController.register
);
router.post("/login", validateBody(schemas.loginScheme), userController.login);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  userController.updateSubscription
);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  userController.updateAvatar
);

router.post("/logout", authenticate, userController.logout);

router.get("/current", authenticate, userController.getCurrent);

module.exports = router;
