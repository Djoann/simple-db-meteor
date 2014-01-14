if (Meteor.isClient) {
  
      var nodeDB = new Meteor.Collection('nodes');
        
      Template.DBelements.nodes = nodeDB.find({});

      Template.DBelements.events = {
          'click .remove': function () {
              nodeDB.remove(this._id);
              console.log(this._id, "removed from the database");
          }
      };

      //Template "cloudForm" : Add New Cloud
      // Wait for a 'submit'
      Template.inputDB.events = {
        'submit' : function (e, tmpl) {
          e.preventDefault();
          
          //console.log("clicked submit form");  
          //create the new cloud
          var newNode = {
            nodeTitle: tmpl.find("#nodeTitle").value
          };
            
          //add the cloud to the database
          nodeDB.insert(newNode);
          console.log("newNode added to database  : ", newNode);
          
          console.log("nodeDB updated show: ", nodeDB._collection.docs)
          // Reset the input fields
          $('#nodeTitle').val(''); 
              
          // Display a nice confirmation message
          $('.added').fadeIn('slow', function() {}).delay(1000).fadeOut('slow', function() {});
        
        } 
      };  // end template form



} //END METEOR CLIENT

if (Meteor.isServer) {

  var nodeDB = new Meteor.Collection('nodes');


  Meteor.startup(function () {
    // code to run on server at startup
  });
}
