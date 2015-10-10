Router.configure({
  layoutTemplate : 'main'
});

Router.map(function() {
  this.route('/dashboard', {path:'/'});
  // this.route('/dashboard', {path:'/dashboard'});
  this.route('/profile/edit', {path:'/profile/edit'});
  this.route('/dashboardLayout', {path:'/dashboardLayout'});
})
