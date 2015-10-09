
Tracker.autorun(function() {
  console.log('stillworkin');
  if (Meteor.user() !== null) {
    Router.go('/dashboard');
  };
});