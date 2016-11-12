import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.get('store').findAll('parent');
  },

  actions: {
    addParent: function() {
      const controller = this.get('controller');
      const store = this.get('store');
      var parentName = controller.get('parentName');
      var newParent = store.createRecord('parent', {
        name: parentName
      });
      newParent.save();
      controller.set('parentName', '');
    },

    deleteParent: function (parentId) {
      var self = this;
      this.store.findRecord('parent', parentId). then(function (targetParent) {
        targetParent.destroyRecord().then(function() {
          self.refresh();
        });
      });
    }
  }

});
