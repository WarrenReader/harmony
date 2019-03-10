const express = require("express");
const router = express.Router();

// @route GET api/users/health
// @desc Tests helth of /users/ route
// @access Public
router.get("/health", (req, res) => res.send({ status: "Up And Running" }));

module.exports = router;
