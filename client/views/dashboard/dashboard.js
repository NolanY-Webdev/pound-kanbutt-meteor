  Template.todos.helpers({
    getAllTodoItems : function() {
      return Items.find().fetch();
      // {}, { sort : { createdAt : -1 } }
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
        createdAt : new Date()
      });
      $('[name="todoName"]').val('');
      $('[name="todoDescription"]').val('');
      // getDaItems();
      // binding items to new Items
      // this.items = getDaItems();
    }
  });

  function getDaItems() {
    var collection = Items.find().fetch();
    console.log(collection);
    return collection;
  }


  Template.todoItem.events({
    'click .delete-todo' : function() {
      event.preventDefault();
      var documentId = this._id;
      // var confirm = window.confirm('Delete this task?');
      // if (confirm) {
        Items.remove({ _id : documentId });
      // }
    }
  });