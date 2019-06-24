import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  isChecked: computed('{item,selected.[]}', function() {
    return this.selected.includes(this.item);
  })
});
