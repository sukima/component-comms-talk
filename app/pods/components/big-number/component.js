import Component from '@ember/component';
import { computed } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  classNames: ['big-number'],
  attributeBindings: ['style'],

  fontSize: null,

  style: computed('fontSize', function() {
    return htmlSafe(this.fontSize ? `font-size: ${this.fontSize}px` : '');
  }),

  formatedNumber: computed('number', function() {
    return this.number ? this.number.toLocaleString() : '0';
  }),

  didReceiveAttrs() {
    this._super(...arguments);
    if (this.styleManagerRegister) {
      this.styleManagerRegister(guidFor(this), this.number);
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    if (this.styleManagerUnregister) {
      this.styleManagerUnregister(guidFor(this));
    }
  }
});
