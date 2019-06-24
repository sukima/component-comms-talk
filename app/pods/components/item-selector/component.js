import Component from '@ember/component';
import { computed } from '@ember/object';
import { equal, or } from '@ember/object/computed';

export const STATES = Object.freeze({
  NONE: 'none',
  SOME: 'some',
  ALL: 'all'
});

export default Component.extend({
  tagName: '',

  isAllOrNone: or('{isNoneSelected,isAllSelected}'),
  isNoneSelected: equal('state', STATES.NONE),
  isSomeSelected: equal('state', STATES.SOME),
  isAllSelected: equal('state', STATES.ALL),

  state: computed('{items,selected}.length', function() {
    if (this.items.length === this.selected.length) {
      return STATES.ALL;
    } else if (this.selected.length === 0) {
      return STATES.NONE;
    } else {
      return STATES.SOME;
    }
  }),

  init() {
    this._super(...arguments);
    this.set('selected', []);
  },

  add(option) {
    this.selected.pushObject(option);
  },

  remove(option) {
    this.selected.removeObject(option);
  },

  setAll() {
    this.selected.setObjects(this.items);
  },

  clear() {
    this.selected.clear();
  },

  actions: {
    addOption(option) {
      if (!this.selected.includes(option)) {
        this.add(option);
      }
    },

    removeOption(option) {
      this.remove(option);
    },

    toggleOption(option) {
      if (this.selected.includes(option)) {
        this.remove(option);
      } else {
        this.add(option);
      }
    },

    addAll() {
      this.setAll();
    },

    removeAll() {
      this.clear();
    },

    toggleAllOrNone() {
      if (this.isAllSelected) {
        this.clear();
      } else {
        this.setAll();
      }
    }
  }
});
