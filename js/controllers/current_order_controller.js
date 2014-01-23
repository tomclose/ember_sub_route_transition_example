ShoppingCart.CurrentOrderController = Ember.ObjectController.extend({

  actions: {
    alert: function() {
      alert('Fired from current order');
    }
  }

});