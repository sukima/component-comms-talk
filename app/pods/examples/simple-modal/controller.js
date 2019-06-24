import Controller from '@ember/controller';

export default Controller.extend({
  // BEGIN-SNIPPET simple-modal-use
  actions: {
    openModal(modalManager) {
      this.set('result', 'Pending');
      modalManager.open()
        .onConfirmed(() => this.set('result', 'Confirmed'))
        .onCancelled(() => this.set('result', 'Cancelled'));
    }
  }
  // END-SNIPPET
});
