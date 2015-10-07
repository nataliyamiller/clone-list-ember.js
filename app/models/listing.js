import DS from 'ember-data';

export default DS.Model.extend({
  listingName: DS.attr(),
  description: DS.attr(),
  contactInfo: DS.attr(),
  image: DS.attr(),
  date_added: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  category: DS.belongsTo('category', {async: true})
});
