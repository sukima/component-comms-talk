import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { id: '1', name: 'Item A' },
      { id: '2', name: 'Item B' },
      { id: '3', name: 'Item C' },
      { id: '4', name: 'Item D' },
      { id: '5', name: 'Item E' },
      { id: '6', name: 'Item F' },
      { id: '7', name: 'Item G' },
      { id: '8', name: 'Item H' }
    ];
  }
});
