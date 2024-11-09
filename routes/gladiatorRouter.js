const express = require("express");
const router = express.Router();
const gladiadoresController = require("../controllers/gladiatorController");

router.get("/", gladiadoresController.getGladiators);
router.get("/typeGladiator", gladiadoresController.getGladiator);
router.get("/:id", gladiadoresController.getGladiator);

module.exports = router;