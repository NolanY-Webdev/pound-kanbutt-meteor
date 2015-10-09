Template.login.events({
  'click #login-buttons-password' : function(e) {
    e.preventDefault();
    Router.go('/dashboard');
    console.log('MIKE HALP');
  }
})




// Todos.insert({
//   title: "Something",
//   description : "Something else",
//   creator : "Someone",
//   completed : false
// });

// //return documents from Todos collection above
// Template.todos.helpers({
//   'todo': function() {
//     return Todos.find();
//   }
// })