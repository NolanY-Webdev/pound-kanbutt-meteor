console.log('js working')




Tracker.autorun(function() {
  if (Meteor.user() !== null) {
    Router.go('/dashboard');
  }
  if (Meteor.user() === null) {
    Router.go('/');
  }
});