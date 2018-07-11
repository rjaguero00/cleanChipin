const express = require("express");
const path = require("path");
const router = express.Router();
const apiRoutes = require("./api");
const auth = require("./auth.js");
const apiAuth = require("./api-routes.js");

router.use(express.static(path.join(__dirname, '../client/build')));
// API Activity Routes
router.use("/api", apiRoutes);

// Auth Routes
router.use("/auth", auth);

// JWT Routes
router.use("/jwt", apiAuth);



// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;