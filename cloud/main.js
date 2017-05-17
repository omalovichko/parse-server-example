Parse.Cloud.afterSave(Parse.User, function(request) {
  var user = request.object;
  var query = new Parse.Query(Parse.Role);
  query.equalTo("name", "user");
  query.first ( {
      useMasterKey: true,
      success: function(object) {
          if ( object ) {
              object.relation("users").add(user);
              object.save(null, { useMasterKey: true });
              console.log("Add user to role user");
          }
          consloe.log(object);
      },
      error: function(error) {
          console.log("Add user to role error:  " + error.message);
      }
  });
});