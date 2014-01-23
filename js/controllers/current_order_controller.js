ShoppingCart.CurrentOrderController = Ember.ObjectController.extend({

  actions: {
    addProduct: function(product) {
      this.get('model').addProduct(product);
    }
  },

  itemCount: function() {
    return this.get('model.items.length');
  }.property('model.items.length'),

});