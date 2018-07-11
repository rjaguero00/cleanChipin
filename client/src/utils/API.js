import axios from "axios";

export default {

  // Gets all attending Activities
  findAttendingActivities: function (id) {
    console.log(id);
    return axios.get("/api/activitiesRoutes/findAttendingActivities/" + id);
  },

  // Gets all saved Activities
  findSavedActivities: function (id) {
    console.log(id);
    return axios.get("/api/activitiesRoutes/findSavedActivities/" + id);
  },
  //updates from saved to not saved and is removed from saved dashboard
  updateSavedActivity: function (activityData) {
    return axios.put("/api/activitiesRoutes/updateSavedActivity", activityData)
  },
  //updates from attending to not attending and is removed from main dashboard
  notAttending: function (attendingData) {
    return axios.put("/api/activitiesRoutes/notAttending", attendingData)
  },
  // Gets the activity with the given id
  getActivity: function (id) {
    return axios.get("/api/activitiesRoutes/activity/" + id);
  },
  // Deletes the activity with the given id
  deleteActivity: function (id) {
    return axios.delete("/api/activitiesRoutes/" + id);
  },
  // get list of host activities for user
  getHostActivities: function (id) {
    return axios.get("/api/activitiesRoutes/hostActivities/" + id);
  },
  // Delete host activity from admin dashboard
  deleteHostActivity: function (id) {
    return axios.delete("/api/activitiesRoutes/deleteHostActivity/" + id);
  },
  updateAllHours: function (id) {
    console.log("putting");
    return axios.put("/api/activitiesRoutes/updateAllHours/" + id);
  },
  // Login route
  getUserLogin: function (loginData) {
    return axios.post("/auth/userlogin", loginData);
  },
  // Get active/logged-in user
  activeUser: function () {
    // console.log(localStorage.getItem('jwtToken'));
    // store jwt token in axios default headers for request
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.post("/jwt/logincheck");
  },
  //Post Events router
  postEvent: function (activityData, err) {
    if (err) {
      console.log(err);
    }
    return axios.post("/api/activitiesRoutes", activityData);
  },
  // Post Organization
  postOrg: function () {
    return axios.post("/api/organization");
  },
  getUserStuff: function (userID) {
    return axios.get("/api/activitiesRoutes/getUserStuff/" + userID);
  },
  getHoursPoints: function (userID) {
    return axios.get("/api/activitiesRoutes/getHoursPoints/" + userID);
  },
  getPoints: function (userID) {
    return axios.get("/api/activitiesRoutes/getPoints/" + userID);
  },
  //Post User
  postUser: function (userData, err) {
    if (err) {
      console.log(err);
    }
    console.log("arrived at utils api")
    return axios.post("/auth/register", userData);
  },

  //============== BROWSE PAGE ROUTERS ===================//
  // Gets all activities
  getActivities: function () {
    return axios.get("/api/activitiesRoutes");
  },
  // For browse by keyword and location
  getKeywordLocation: function (keyword, location) {
    return axios.get("/api/activitiesRoutes/getKeywordLocation/" + keyword + "/" + location);
  },
  // For browse by keyword
  getKeyword: function (keyword) {
    return axios.get("/api/activitiesRoutes/getKeyword/" + keyword);
  },
  // For browse by location
  getLocation: function (location) {
    return axios.get("/api/activitiesRoutes/getLocation/" + location);
  },
  // For saving(favoriting) activiy
  saveActivity: function (activityData) {
    return axios.post("/api/activitiesRoutes/saveActivity", activityData);
  },
  // For saving(marking as attending) an activity
  saveAttending: function (attendingData) {
    console.log(attendingData);
    return axios.post("/api/activitiesRoutes/saveAttending", attendingData);
  },


};
