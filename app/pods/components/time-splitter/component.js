import Component from '@ember/component';
import { computed } from '@ember/object';

function zeroPad(number) {
  return `00${number}`.substr(-2);
}

export default Component.extend({
  tagName: '',

  date: computed('datetime', function() {
    let month = zeroPad(this.datetime.getMonth() + 1);
    let day = zeroPad(this.datetime.getDate());
    let year = this.datetime.getFullYear();
    return `${month}/${day}/${year}`;
  }),

  time: computed('datetime', function() {
    let hours = zeroPad(this.datetime.getHours());
    let minutes = zeroPad(this.datetime.getMinutes());
    return `${hours}:${minutes}`;
  }),

  actions: {
    updateDate(newDate) {
      let [month, day, year] = newDate.split('/');
      let date = new Date(this.datetime.getTime());
      date.setMonth(parseInt(month, 10) - 1);
      date.setDate(parseInt(day, 10));
      date.setFullYear(parseInt(year, 10));
      this.update(date);
    },

    updateTime(newTime) {
      let [hours, minutes] = newTime.split(':');
      let date = new Date(this.datetime.getTime());
      date.setHours(parseInt(hours, 10));
      date.setMinutes(parseInt(minutes, 10));
      this.update(date);
    }
  }
});
