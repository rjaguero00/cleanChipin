const router = require("express").Router();
const activitiesRoutes = require("./activitiesRoutes");

// Volunteer Activities routes
router.use("/activitiesRoutes", activitiesRoutes);

// Get Active / Logged-in user

module.exports = router;