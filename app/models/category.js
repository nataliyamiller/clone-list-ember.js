import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  subcats: DS.hasMany('subcat', { async: true})
});
