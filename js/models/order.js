ShoppingCart.Order = DS.Model.extend({
  init: function() {
    this._super();
    this.set('items', Em.A());
  },

  addProduct: function(product) {
    var items = this.get('items');
    items.push(product);
    console.log(items);
  }

});

ShoppingCart.Order.reopenClass({
  current: function() {
    if (Em.isNone(localStorage.currentOrder)) {
      var currentOrder = ShoppingCart.Order.create();
      localStorage.currentOrder = currentOrder;
      return currentOrder;
    } else {
      return localStorage.currentOrder;
    }
  }
});