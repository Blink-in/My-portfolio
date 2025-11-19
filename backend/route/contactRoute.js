const express = require("express");
const Contact = require("../module/contactModule.js");

const router = express.Router();
const {
    sendContactEmail
} = require("../controller/contactController.js")

router.post("/contact", sendContactEmail);

module.exports =router;