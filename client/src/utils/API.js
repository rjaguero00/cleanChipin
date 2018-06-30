import axios from "axios";

export default {
  // Gets all activity
  getActivities: function () {
    return axios.get("/api/activitiesRoutes");
  },
  // Gets the activity with the given id
  getActivity: function (id) {
    return axios.get("/api/activitiesRoutes/" + id);
  },
  // Deletes the activity with the given id
  deleteActivity: function (id) {
    return axios.delete("/api/activitiesRoutes/" + id);
  },
  // Saves an activity to the database
  // saveActivity: function (activityData) {
  //   return axios.post("/api/activities", activityData);
  // },
  //Login route
  getUserLogin: function () {
    return axios.get("/api/users");
  },
  //Post Events router
  postEvent: function (activityData, err) {
    console.log("I got to the utils/api part!")
    console.log("activity data sent: ");
    console.log(activityData);
    if (err) {
      console.log(err);
    }
    return axios.post("/api/activitiesRoutes", activityData);
  },
  //Post Organization
  postOrg: function () {
    return axios.post("/api/organization");
  },
  //Post User
  postUser: function (email, password) {
    return axios.post("/api/auth/register");
  }
};
