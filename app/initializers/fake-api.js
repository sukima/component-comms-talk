import Pretender from 'pretender';
const { floor, random } = Math;

function eventually() {
  return new Promise(resolve => {
    setTimeout(resolve, floor(random() * 1000) + 400);
  })
}

function initialize() {
  new Pretender(function() {
    this.get('/api/examples/data-fetching', async req => {
      await eventually();
      if (floor(random() * 100) < 25) {
        return [404, {}, 'Not found'];
      } else {
        return [200, {'Content-Type': 'application/json'}, JSON.stringify({
          message: `This is working (${req.queryParams['cache-bust']})`
        })];
      }
    });
  });
}

export default {
  name: 'fake-api',
  initialize
};
