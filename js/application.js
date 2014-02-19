window.App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Order = DS.Model.extend({
  numberOfItems: DS.attr('number'),
});

App.Order.FIXTURES = [
  { id: 1, numberOfItems: 23 },
];