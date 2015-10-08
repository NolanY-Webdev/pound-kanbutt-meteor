Template.login.events({
  'click #login-buttons-password' : function(e) {
    e.preventDefault();
    Router.go('/dashboard');
    console.log('MIKE HALP');
  }
})