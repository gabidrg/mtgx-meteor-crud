// Create/Update forms and UI components are implemented with AutoForm package
// We bind to after submit event for insert/update program ops and manage the redirects
// upon form submits as well as potential errors

AutoForm.addHooks(['programForm'], {
  after: {
    insert: function(error, result) {
      if (error) {
        console.log("Error adding program:", error);
      } else {
        console.log("Program added:", result);
        Router.go('programsIndex')
      }
    },
    update: function(error) {
      if (error) {
        console.log("Error updating program:", error);
      } else {
        console.log("Program updated");
        Router.go('programsIndex')
      }
    }
  }
});
