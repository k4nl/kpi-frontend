import moment from 'moment';

export default class DateHandler {

  static getMonth(month: Date) {
    return moment(month).get('month') + 1;
  }
}