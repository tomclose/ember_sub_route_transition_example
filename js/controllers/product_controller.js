ShoppingCart.ProductController = Ember.ObjectController.extend({
  needs: "currentOrder",

  currentOrder: Ember.computed.alias("controllers.currentOrder"),

  actions: {
    addToOrder: function() {
      var product = this.get('model');
      this.get('currentOrder').send('addProduct', product); // send because it is an action on the current_order_controller
    }
  }

});