import Ember from 'ember';

export default Ember.Route.extend({
  today: Date.now(),
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      listings: this.store.findAll('listing')
    })
  }
});
