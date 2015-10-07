import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },

  actions: {
    deleteListing(listing) {
      listing.destroyRecord().then(function() {
        category.save();
      });
      this.transitionTo('index');
    }

  }
});
