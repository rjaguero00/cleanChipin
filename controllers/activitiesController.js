var model = require('../models');
module.exports = {
    // FINDS ALL VOLUNTEER ACTIVITIES IN DATABASE
    findAll: function (req, res) {
        model.Activity.findAll()
            .then(function (data) {
                res.json(data);
            })
    },
    //CREATES NEW VOLUNTEER ACTIVITY IN DATABASE 
    postEvent: function (req, res) {
        console.log("I got to controllers section!");
        console.log(req.body);
        var id = req.body.UserId;
        var title = req.body.title;
        var body = req.body.body;
        var contact = req.body.contact;
        var address = req.body.address;
        var points = req.body.points;

        model.Activity.create({
            UserId: id,
            title: title,
            body: body,
            contact: contact,
            address: address,
            points: points

        }).then(function (data) {
            console.log("I posted the activity to the Activity table!");
            res.json(data);
            console.log(data);
            model.User_Event_Bridge.create({
                activityID: data.id,
                points: data.points,
                saved: data.saved,
                validated: data.validated,
                attending: data.attending,
                denied: data.denied

            }).then(function (data) {
                console.log("Posted user event bridge");
                res.json(data);
            })
        })

    },
    // DELETES VOLUNTEER ACTIVITY FROM DATABASE - USED BY VOLUNTEER ACTIVITY CREATORS
    remove: function (req, res) {
        model.Activity.destroy({
            where: { id: req.body.id }
        }).then(function (data) {
            console.log("Item has been deleted");
            res.redirect("/dashboard")
        })
    },
    // SAVES VOLUNTEER ACTIVITY IN USER'S SAVED LIST TABLE
    saveActivity: function (req, res) {
        model.User_Event_Bridge.findOne({
            activityID: req.params.id
        }).then(User_Event_Bridge => {
            User_Event_Bridge.updateAttributes({
                saved: "true"
            });
        });

    },

    // SAVES VOLUNTEER ACTIVITY IN THE USER'S ATTENDING LIST TABLE
    saveAttending: function (req, res) {
        model.User_Event_Bridge.findOne({
            activityID: req.params.id
        }).then(User_Event_Bridge => {
            User_Event_Bridge.updateAttributes({
                attending: "true"
            });
        });

    }

}

