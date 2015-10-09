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

    }
  });

  Template.todoItem.events({
    'click .delete-todo' : function(event) {
      event.preventDefault();
      var documentId = this._id;
      var confirm = window.confirm('Delete this task?');
      if (confirm) {
        Todos.remove({ _id : documentId });
      }
    }
  });