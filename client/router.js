Router.configure({
  layoutTemplate : 'login'
});

Router.route('/', function() {
  this.render('login');
});

Router.route('/name', function() {
  this.render();
});