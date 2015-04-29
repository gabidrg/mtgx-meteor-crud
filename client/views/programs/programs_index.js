Template.programsIndex.rendered = function() {
};

Template.programsIndex.helpers({
});

// Handle the DELETE operation
Template.programsIndex.events ({
  'click .delete-program': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("You are about to delete a program record. Proceed?")) {
      Programs.remove(item._id);
      console.log("Program deleted.")
    }
  }
});
