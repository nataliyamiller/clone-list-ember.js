import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    saveListing() {
      var params = {
        listingName: this.get('listingName') ? this.get('listingName') : "",
        description: this.get('description') ? this.get('description') : "",
        contactInfo: this.get('contactInfo') ? this.get('contactInfo') : "",
        image: this.get('image') ? this.get('image') : "",
        date_added: Date.now(),
        category: this.get('category') ? this.get('category') : ""
      };
      this.set('listingName', ''),
      this.set('description', ''),
      this.set('contactInfo', ''),
      this.set('image'),
      this.set('addNewListing', false),
      this.sendAction('saveListing', params);
    }
  }
});
