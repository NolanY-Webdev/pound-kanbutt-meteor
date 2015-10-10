Template.todos.helpers({
  getAllAssignedItems : function() {
    return Items.find({ progress : 1 });
  }
});

Template.todosinprog.helpers({
  getAllTodoItems : function() {
    return Items.find({ progress : 2 });
  }
});

Template.todosdone.helpers({
  getAllDoneItems : function() {
    return Items.find({ progress : 3 });
  }
});

Template.addTodo.events({
  'submit form' : function(event) {
    console.log('submitted');
    event.preventDefault();
    var todoName = $('[name="todoName"]').val();
    var todoDescription = $('[name="todoDescription"]').val();
    Items.insert({
      name : todoName,
      description : todoDescription,
      completed : false,
      // createdAt : new Date(),
      progress : 1

    });
    $('[name="todoName"]').val('');
    $('[name="todoDescription"]').val('');
    // getDaItems();
    // binding items to new Items
    // this.items = getDaItems();
  }
});

// function getDaItems(prog) {
//   var collection = Items.find({progress: prog}).fetch();
//   console.log(collection);
//   return collection;
// }


Template.todoItem.events({
  'click .delete-todo' : function() {
    event.preventDefault();
    var documentId = this._id;
    // var confirm = window.confirm('Delete this task?');
    // if (confirm) {
    Items.remove({ _id : documentId });
    // }
  },
  'click .progress-todo' : function() {
    console.log(this);
    event.preventDefault();
    var documentId = this._id;
    var todoprogress = this.progress + 1;
    Items.update({ _id : documentId }, { $set : { progress : todoprogress } } );
  }
});

Template.button.events({
  'click .doNotPush' : function() {
    event.preventDefault();
    document.body.background = "http://www.impactwrestling.com/images/stories/roster/awesomekong/Awesome_Kong_9268.jpg"
    document.body.innerHTML = "YOU WERE WARNED";
  }
})

Template.login.events({
  'submit form': function(event) {
    event.preventDefault();
    var emailVar = event.target.loginEmail.value;
    var passwordVar = event.target.loginPassword.value;
    Meteor.loginWithPassword(emailVar, passwordVar);
  }
});

Template.register.events({
  'submit form': function(event) {
    event.preventDefault();
    var emailVar = event.target.registerEmail.value;
    var passwordVar = event.target.registerPassword.value;
    Accounts.createUser({
      email: emailVar,
      password: passwordVar
    });
  }
});

Template.dashboard.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
  }
});