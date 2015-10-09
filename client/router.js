Router.configure({
  layoutTemplate : 'main'
});

Router.map(function() {
  this.route('login', {path:'/'});
  this.route('dashboard', {path:'/dashboard'});
  this.route('profile/edit', {path:'/profile/edit'});
  this.route('tasks/new'), {path:'/tasks/new'}
})
