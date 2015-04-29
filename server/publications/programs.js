// Meteor uses a publish/subscribe model
// On server side, calling Meteor.publish registers "programs" as a publication
// On client side, calling Meteor.subscribe("programs") subscribes the client to the data stream
// incoming from programs publication

// Publish programs
Meteor.publish('programs', function() {
  return Programs.find();
});

// Publish an individual program
Meteor.publish('program', function(id) {
  return Programs.find(id);
});
