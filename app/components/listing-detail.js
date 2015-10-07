import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },

    // deleteListing(listing) {
    //   if (confirm('Are you sure you want to delete this listing?')) {
    //     this.sendAction('deleteListing', listing);
    //   }
    // },

    deleteListing(listing) {
      if (confirm('Are you sure you want to delete this listing?')) {
        this.sendAction('deleteListing', listing);
      }
    }
  }
});
