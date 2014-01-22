ShoppingCart.Router.map(function(){
  this.resource('products', {path: "/"});

});

ShoppingCart.ProductsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('product');
  }
})