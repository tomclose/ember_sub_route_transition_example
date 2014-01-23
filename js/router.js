ShoppingCart.Router.map(function(){
  this.resource('products', {path: "/"});

});

ShoppingCart.ProductsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('product');
  },
  setupController: function(controller, model) {
    this.controllerFor('currentOrder').set('model', this.currentOrder());
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
  },


  currentOrder: function() {
    // getById searches the local store, returning synchronously
    var current = this.store.getById('order', 'current');
    if (Em.isNone(current)) {
      current = this.store.createRecord('order', {id: 'current'});
    }
    return current;
  }
})