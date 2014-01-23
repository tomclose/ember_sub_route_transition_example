ShoppingCart.ProductController = Ember.ObjectController.extend({
  needs: "currentOrder",

  currentOrder: Ember.computed.alias("controllers.currentOrder"),

  actions: {
    alert: function() {
      this.get('currentOrder').send('alert'); // send because it is an action on the current_order_controller
    }
  }

});