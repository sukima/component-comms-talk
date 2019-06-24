import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  groups: computed('{maxGroupSize,items.[]}', function() {
    let groups = [];
    let group = [];
    for (let item of this.items) {
      group.push(item);
      if (group.length === this.maxGroupSize) {
        groups.push(group);
        group = [];
      }
    }
    if (group.length > 0) {
      groups.push(group);
    }
    return groups;
  })
});
