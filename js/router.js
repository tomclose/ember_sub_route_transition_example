App.Router.map(function(){
  this.resource('login');

  this.resource('order', { path: '/orders/:order_id' }, function(){
    this.resource('checkout');
  })

});

App.AuthenticatedRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    var loggedIn = this.controllerFor('application').get('isLoggedIn');
    if (!loggedIn) {
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
    return this.store.find('order', params.order_id);
  }
})

App.CheckoutRoute = App.AuthenticatedRoute.extend({});

App.ApplicationRoute = Ember.Route.extend({
  actions: {
    login: function(){
      var applicationController = this.controllerFor('application');
      applicationController.set('isLoggedIn', true);
      var attemptedTransition = applicationController.get('attemptedTransition');
      if (attemptedTransition) {
        attemptedTransition.retry();
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
