ShoppingCart.Order = Ember.Object.extend({


});

ShoppingCart.Order.reopenClass({
  current: function() {
    if (Em.isNone(localStorage.currentOrder)) {
      var currentOrder = ShoppingCart.Order.create();
      localStorage.currentOrder = currentOrder;
      return currentOrder
    } else {
      return localStorage.currentOrder;
    }
  }
});