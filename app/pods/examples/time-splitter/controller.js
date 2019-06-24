import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  dateStr: computed('datetime', function() {
    return this.datetime.toISOString();
  }),

  setToNow() {
    this.set('datetime', new Date());
  },

  init() {
    this._super(...arguments);
    this.setToNow();
  },

  actions: {
    updateToNow() {
      this.setToNow();
    }
  }
});
