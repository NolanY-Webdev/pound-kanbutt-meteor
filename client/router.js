Router.configure({
  layoutTemplate : 'dashboardLayout'
});

Router.route('/', function() {

  this.render('userLayout');
});

Router.route('/name/:name', function() {
  this.render('userName', {
    data : function() {
      return {
        userName : this.params.name
      }
    }
  });
});