Users = new Mongo.Collection("users");
//Studies = new Mongo.Colelction("studies");

if (Meteor.isClient) {

  Template.body.helpers ({
    users: function() {
      return Users.find({});
    }
  });

  Template.body.events({
    "submit .new-user": function (event) {
      var first = event.target.fname.value;
      var last = event.target.lname.value;
      Users.insert({
        fname: first,
        lname: last,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.fname.value = "";
      event.target.lname.value = "";

      // Prevent default form submit
      return false;
    }

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
