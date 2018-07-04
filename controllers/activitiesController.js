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

        model.Activity.create({
            UserId: id,
            title: title,
            body: body,
            contact: contact,
            address: address,
        }).then(function (data) {
            console.log("I posted the activity to the Activity table!");
            res.json(data);

        })
    },
    // DELETES VOLUNTEER ACTIVITY FROM DATABASE - USED BY VOLUNTEER ACTIVITY CREATORS
    remove: function (req, res) {
        model.Activity.destroy({
            where: { id: req.body.id }
        }).then(function (data) {
            console.log("Item has beend deleted");
            res.redirect("/dashboard")
        })
    },
    // SAVES VOLUNTEER ACTIVITY IN USER'S SAVED LIST TABLE
    saveActivity: function (req, res) {

    },
    // SAVES VOLUNTEER ACTIVITY IN THE USER'S ATTENDING LIST TABLE
    saveAttending: function (req, res) {

    }

}

