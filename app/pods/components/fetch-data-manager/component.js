import Component from '@ember/component';
import { task } from 'ember-concurrency';
import URI from 'urijs';

export default Component.extend({
  tagName: '',
  autoLoadOnInsert: true,
  attepts: 1,

  fetchTask: task(function * () {
    let url = new URI(this.url).addQuery('cache-bust', this.attepts++);
    let result = yield fetch(url);
    if (result.status !== 200) {
      throw new Error('Unable to fetch data');
    }
    return result.json();
  }).drop(),

  didInsertElement() {
    this._super(...arguments);
    if (this.autoLoadOnInsert) {
      this.fetchTask.perform();
    }
  }
});
