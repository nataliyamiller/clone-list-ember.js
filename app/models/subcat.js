import DS from 'ember-data';

export default DS.Model.extend({
  subTitle: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
