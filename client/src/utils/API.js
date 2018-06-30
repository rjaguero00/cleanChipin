import axios from "axios";

export default {
  // Gets all activity
  getActivities: function () {
    return axios.get("/api/activitiesRoutes");
  },

  // For saving(favoriting) activiy
  saveActivity: function(activityData, err) {
    if (err){
      console.log(err);
    }
    return axios.post("/api/activitiesRoutes/", activityData);
  },

  // For saving(marking as attending) an activity
  saveAttending: function(attendingData, err) {
    if (err){
      console.log(err);
    }
    return axios.post("api/activitiesRoutes/", attendingData);
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
<<<<<<< HEAD
    console.log("I got to the utils/api part!")
    console.log("activity data sent: ");
    console.log(activityData);
    if (err) {
=======
    if (err){
>>>>>>> 49924f5a93f56d40c0c0f805a1e55cbdb8af4ef9
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
