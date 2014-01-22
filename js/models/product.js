ShoppingCart.Product = DS.Model.extend({
  title: DS.attr('string');
  price: DS.attr('number');
})

ShoppingCart.Product.FIXTURES = [
 {
   id: 1,
   title: 'Big red chair',
   price: 20
 },
 {
   id: 2,
   title: 'Blue bike',
   price: 40
 },
 {
   id: 3,
   title: 'Ugly cat',
   price: 21
 }
];