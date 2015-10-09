// Items = new Meteor.Collection("todos");

// if (Meteor.isClient) {
  // // counter starts at 0
  // Session.setDefault('counter', 0);

  // Template.hello.helpers({
  //   counter: function () {
  //     return Session.get('counter');
  //   }
  // });

  // Template.hello.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
  // });

  //   Template.todos.helpers({
  //   'todo' : function() {
  //     return Todos.find( {}, { sort : { createdAt : -1 } });
  //   }
  // });

  // Template.addTodo.events({
  //   'submit form' : function(event) {
  //     console.log('submitted');
  //     event.preventDefault();
  //     var todoName = $('[name="todoName"]').val();
  //     var todoDescription = $('[name="todoDescription"]').val();
  //     Todos.insert({
  //       name : todoName,
  //       description : todoDescription,
  //       completed : false,
  //       createdAt : new Date()
  //     });
  //     $('[name="todoName"]').val('');
  //     $('[name="todoDescription"]').val('');

  //   }
  // });

  // Template.todoItem.events({
  //   'click .delete-todo' : function(event) {
  //     event.preventDefault();
  //     var documentId = this._id;
  //     var confirm = window.confirm('Delete this task?');
  //     if (confirm) {
  //       Todos.remove({ _id : documentId });
  //     }
  //   }
  // });
// }



//shits and giggles - getting tasks to display 9:38am Thursday
// Todos = new Meteor.Collection('todos');

