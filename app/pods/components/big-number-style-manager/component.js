import Component from '@ember/component';
import { computed } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
const { max, pow } = Math;

const FONT_SIZES = Object.freeze([null, null, 34, 26, 20]);

export default Component.extend({
  tagName: '',

  maxFontSize: computed(function() {
    let numbers = this.bigNumberRegistry.values();
    let largestNumber = max(...numbers);
    for (let index = 0; index < FONT_SIZES.length; index++) {
      let cutoff = pow(10, index + 1);
      if (largestNumber < cutoff) {
        return FONT_SIZES[index];
      }
    }
    return FONT_SIZES[FONT_SIZES.length - 1];
  }),

  init() {
    this._super(...arguments);
    this.set('bigNumberRegistry', new Map());
  },

  updateComputeds() {
    this.notifyPropertyChange('maxFontSize');
  },

  actions: {
    registerBigNumber(id, number) {
      let oldNumber = this.bigNumberRegistry.get(id);
      if (oldNumber !== number) {
        this.bigNumberRegistry.set(id, number);
        scheduleOnce('afterRender', this, 'updateComputeds');
      }
    },

    unregisterBigNumber(id) {
      this.bigNumberRegistry.delete(id);
      scheduleOnce('afterRender', this, 'updateComputeds');
    }
  }
});

