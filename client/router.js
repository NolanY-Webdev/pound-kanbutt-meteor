Router.configure({
  layoutTemplate : 'dashboardLayout'
});

Router.route('/', function() {
  this.render();
});

Router.route('/name', function() {
  this.render();
});