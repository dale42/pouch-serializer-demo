import Ember from 'ember';

export default Ember.Route.extend({

  model: function (params) {
    return this.store.findRecord('parent',  params.parentId);
  },

  actions: {
    addChild: function() {
      var parent = this.controller.get('model');
      var childName = this.controller.get('childName');
      var newChild = this.store.createRecord('child', {
        parent: parent,
        name: childName
      });
      parent.get('children').pushObject(newChild);
      newChild.save().then(() => parent.save());

      this.controller.set('childName', '');
    },

    deleteChild: function (childId) {
      var self = this;
      this.store.findRecord('child', childId). then(function (targetChild) {
        targetChild.destroyRecord().then(function() {
          self.refresh();
        });
      });
    }
  }

});
