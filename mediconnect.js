Users = new Mongo.Collection("users");

if (Meteor.isClient) {

  Template.body.helpers ({
    users: function() {
      return Users.find({});
    }
  });

  Template.body.events({
    "submit .new-user": function (event) {
      var text = event.target.text.value;

      Users.insert({
        fname: text
      });

      event.target.text.value = "";

      return false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}