Router.configure({
  layoutTemplate : 'login'
});

Router.route('/', function() {
  this.render('login', { path : '/' });
});

Router.route('/dashboard', function() {
  this.render('dashboard', { path : '/dashboard' });
});