ShoppingCart.Order = DS.Model.extend({
  init: function() {
    this._super();
    this.set('items', Em.A());
  },

  addProduct: function(product) {
    var items = this.get('items');
    items.pushObject(product);
  }

});
