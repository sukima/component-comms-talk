import Controller from '@ember/controller';
import { reads } from '@ember/object/computed';

export default Controller.extend({
  numbers: reads('model')
});
