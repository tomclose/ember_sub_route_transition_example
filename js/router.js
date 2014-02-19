App.Router.map(function(){
  this.resource('login');

  this.resource('order', { path: '/orders/:order_id' }, function(){
    this.resource('checkout');
  })

});

App.AuthenticatedRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    var loggedIn = this.controllerFor('application').get('isLoggedIn');
    window.console.log('Logged in??', loggedIn);
    if (!loggedIn) {
      window.console.log('Not logged in, redirecting ....');
      this.redirectToLogin(transition);
    }
  },

  redirectToLogin: function(transition) {
    var applicationController = this.controllerFor('application');
    applicationController.set('attemptedTransition', transition);
    this.transitionTo('login');
  },
});

App.OrderRoute = Ember.Route.extend({
  model: function(params) {
    window.console.log("Setting order");
    return this.store.find('order', params.order_id);
  }
})

App.CheckoutRoute = App.AuthenticatedRoute.extend({});

App.ApplicationRoute = Ember.Route.extend({
  actions: {
    login: function(){
      this.controllerFor('application').set('isLoggedIn', true);
      var attemptedTransition = this.controllerFor('application').get('attemptedTransition');
      if (attemptedTransition) {
        attemptedTransition.retry();
        var applicationController = this.controllerFor('application');
        applicationController.set('attemptedTransition', null);
      } else {
        // not important
      }
    },
    logout: function(){
      this.controllerFor('application').set('isLoggedIn', false);
    }
  }
});
