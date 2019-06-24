import Component from '@ember/component';
import { computed } from '@ember/object';
import { isNone } from '@ember/utils';

export default Component.extend({
  tagName: '',

  isValueNone: computed('value', function() {
    return isNone(this.value);
  }),

  didReceiveAttrs() {
    if (!this.isValueNone) {
      this.set('cachedValue', this.value);
    }
  }
});
