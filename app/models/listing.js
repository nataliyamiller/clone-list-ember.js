import DS from 'ember-data';

export default DS.Model.extend({
  listingName: DS.attr(),
  description: DS.attr(),
  contactInfo: DS.attr(),
  image: DS.attr(),
  date_added: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
