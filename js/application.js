window.App = Ember.Application.create({
    // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true, 
  LOG_VIEW_LOOKUPS: true,
   LOG_ACTIVE_GENERATION: true,

  // Extremely detailed logging, highlighting every internal
  // step made while transitioning into a route, including
  // `beforeModel`, `model`, and `afterModel` hooks, and
  // information about redirects and aborted transitions
  LOG_TRANSITIONS_INTERNAL: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Order = DS.Model.extend({
  numberOfItems: DS.attr('number'),
});

App.Order.FIXTURES = [
  { id: 1, numberOfItems: 23 },
];