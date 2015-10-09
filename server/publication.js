Meteor.publish('todos', function() {
  return Items.find();
})