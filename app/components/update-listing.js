import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
  actions: {
    updateListingForm() {
      this.set('updateListingForm', true);
    },
    updateListing(listing) {
      var params = {
        listingName: this.get('listingName'),
        description: this.get('description'),
        contactInfo: this.get('contactInfo'),
        image: this.get('image'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
      };
      this.set('listingName', ''),
      this.set('description', ''),
      this.set('contactInfo', ''),
      this.set('image', ''),
      this.set('latitude', ''),
      this.set('longitude', ''),
      this.set('updateListingForm', false);
      this.sendAction('updateListing', listing, params);
    }
  }
});
