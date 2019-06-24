import Component from '@ember/component';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import { STATES } from '../item-selector/component';

export default Component.extend({
  tagName: 'input',
  attributeBindings: ['type'],
  type: 'checkbox',

  isIndeterminate: equal('checked', STATES.SOME),

  isChecked: computed('checked', function() {
    return this.checked !== STATES.NONE ? !!this.checked : false;
  }),

  updateElementState() {
    this.element.checked = this.isChecked;
    this.element.indeterminate = this.isIndeterminate;
  },

  // didReceiveAttrs is called before didInsertElement
  // and does not have a this.element yet.

  didInsertElement() {
    this._super(...arguments);
    this.updateElementState();
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.updateElementState();
  },

  click() {
    if (this.onClick) this.onClick();
  }
});
