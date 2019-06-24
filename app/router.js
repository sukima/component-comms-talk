import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('examples', function() {
    this.route('data-fetching');
    this.route('data-massage');
    this.route('simple-modal');
    this.route('selection-tracker');
    this.route('big-number-style-manager');
    this.route('cachable-property');
    this.route('time-splitter');
  });
});

export default Router;
