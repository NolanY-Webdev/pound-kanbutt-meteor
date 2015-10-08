console.log('js working')


Template.login.events({
  'click #login-buttons-password' : function(e) {
    e.preventDefault();
    Router.go('/dashboard');
    console.log('MIKE HALP');
  }
})

Tracker.autorun(function(){
  if(Meteor.user()){
    console.log('HALP')
    Router.go("/dashboard");
  }
  else{
    // logout handler
  }
});