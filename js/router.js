ShoppingCart.Router.map(function(){
  this.resource('products', {path: "/"});

});

ShoppingCart.ProductsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('product');
  },
  setupController: function(controller, model) {
    this.controllerFor('currentOrder').set('model', ShoppingCart.Order.current());
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('products');
    this.render('currentOrder', { 
      view: 'currentOrder', 
      outlet: 'currentOrder', 
      into: 'products',
      controller: this.controllerFor('currentOrder')
    });
  }
})