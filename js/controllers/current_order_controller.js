ShoppingCart.CurrentOrderController = Ember.ObjectController.extend({

  actions: {
    addProduct: function(product) {
      alert('Adding ' + product.get('title') + " to order");
      this.get('model').addProduct(product);
    }
  },

  itemCount: function() {
    return this.get('model.items.length');
  }.property('model.items.length'),

});