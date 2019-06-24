import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  ephemeralValue: null,

  updateEphemeralValue: task(function * () {
    let value = this.ephemeralValue || 0;
    this.set('ephemeralValue', null);
    yield timeout(1000);
    this.set('ephemeralValue', value + 1);
  }).drop()
});
