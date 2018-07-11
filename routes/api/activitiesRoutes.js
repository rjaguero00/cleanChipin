const router = require("express").Router();
const activitiesController = require("../../controllers/activitiesController");

// Matches with "/api/activitiesRoutes" 
router.route("/")
    .get(activitiesController.findAll)
    .post(activitiesController.postEvent)
// Matches with "/api/activitiesRoutes/saveActivity"
router.route("/saveActivity")
    .post(activitiesController.saveActivity)

router.route('/activity/:id')
    .get(activitiesController.findActivity)
// Matches with "/api/activitiesRoutes/saveAttending"
router.route("/saveAttending")
    .post(activitiesController.saveAttending)

// Matches with "/api/activitiesRoutes/hostActivities/:id"
router.route("/hostActivities/:id")
    .get(activitiesController.hostActivities)

// Matches with "/api/activitiesRoutes/:id/:userID"
router.route("/deleteHostActivity/:id")
    .delete(activitiesController.deleteHostActivity)

// Matches with "/api/activitiesRoutes/updateAllHours/:id"
router.route("/updateAllHours/:id")
    .put(activitiesController.updateAllHours)

// Matches with "/api/activitiesRoutes/:id" 
router.route("/:id")
    .delete(activitiesController.remove)
// Matches with "/api/activitiesRoutes/getUserStuff/:userid"
router.route("/getUserStuff/:userID")
    .get(activitiesController.getUserStuff)
// Matches with "/api/activitiesRoutes/getHoursPoints/:userid"
router.route("/getHoursPoints/:userID")
    .get(activitiesController.getHoursPoints)

// Matches with "/api/activitiesRoutes/getPoints/:userid"
router.route("/getPoints/:userID")
    .get(activitiesController.getPoints)

router.route("/findAttendingActivities/:id")
    .get(activitiesController.findAttendingActivities)

router.route("/findSavedActivities/:id")
    .get(activitiesController.findSavedActivities)

router.route("/getKeywordLocation/:keyword/:location")
    .get(activitiesController.getKeywordLocation)

router.route("/getKeyword/:keyword")
    .get(activitiesController.getKeyword)

router.route("/getLocation/:location")
    .get(activitiesController.getLocation)

router.route("/updateSavedActivity")
    .put(activitiesController.updateSavedActivity)

router.route("/notAttending")
    .put(activitiesController.notAttending)


module.exports = router; 