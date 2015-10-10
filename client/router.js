Router.configure({
  layoutTemplate : 'main'
});

Router.map(function() {
  this.route('/main', {path:'/'});
  this.route('/dashboard', {path:'/dashboard'});
  this.route('/profile/edit', {path:'/profile/edit'});
  this.route('/dashboardLayout', {path:'/dashboardLayout'});
})
