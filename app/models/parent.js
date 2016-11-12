import Model from 'ember-pouch/model';
import DS from 'ember-data';

const {
  attr,
  hasMany
  // belongsTo
} = DS;

export default Model.extend({
  name:     attr('string'),
  children: hasMany('child')
});
