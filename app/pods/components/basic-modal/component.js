import Component from '@ember/component';
import Confirmer from 'confirmed';

export default Component.extend({
  tagName: '',

  openModal() {
    return new Confirmer((resolver) => {
      this.set('isOpen', true);
      this.resolver = resolver;
    }).onDone(() => {
      this.set('isOpen', false);
      this.resolver = null;
    });
  },

  didInsertElement() {
    this._super(...arguments);
    this.registerModalManager({
      open: () => this.openModal(),
      confirm: (v) => this.resolver.confirm(v),
      cancel: (v) => this.resolver.cancel(v),
      reject: (v) => this.resolver.reject(v),
      error: (v) => this.resolver.error(v),
    });
  },

  actions: {
    resolve(method, value) {
      this.resolver[method](value);
    }
  }
});
