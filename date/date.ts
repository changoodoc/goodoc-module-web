type AM_PM = '오전' | '오후';
type WEEK = '일' | '월' | '화' | '수' | '목' | '금' | '토' | '';
type FORMAT_NUMBER = 1;
enum FORMAT {
  'YYYY.MM.DD (WEEK) AMPM HH:mm' = 1
}

interface IDateStringObj {
  year: string;
  month: string;
  day: string;
  hourText: string;
  hour: string;
  hourAmPm: string;
  minutes: string;
  week: number;
  weekText: string;
}

interface IGDWebModuleDate {
  getDateFormat(format: FORMAT_NUMBER): string;
}

export default class GDWebModuleDate implements IGDWebModuleDate {
  private static _instance: GDWebModuleDate;
  static instance(): GDWebModuleDate {
    if (GDWebModuleDate._instance) {
      return GDWebModuleDate._instance;
    }
    return (GDWebModuleDate._instance = GDWebModuleDate.create());
  }
  static create(value: Date | string = null): GDWebModuleDate {
    return new GDWebModuleDate(value);
  }
  private readonly _value: Date;
  constructor(value: Date | string = null) {
    if (typeof value === 'string') {
      this._value = new Date(value);
    } else if (value instanceof Date) {
      this._value = value;
    } else {
      this._value = new Date();
    }
  }
  private toDate(date: Date | string | null): Date {
    if (date === null) {
      return this._value;
    } else if (typeof date === 'string') {
      return new Date(date);
    }
    return date;
  }
  private toDateObj(value: Date): IDateStringObj {
    return {
      year: '' + value.getFullYear(),
      month: this.getTwo(value.getMonth() + 1),
      day: this.getTwo(value.getDate()),
      hour: this.getTwo(value.getHours()),
      hourAmPm: this.getTwo(this.getHourAMPM()),
      hourText: this.getAmPmText(),
      minutes: this.getTwo(value.getMinutes()),
      week: value.getDay(),
      weekText: this.getWeekText(value.getDay())
    };
  }
  getDateFormat(format: FORMAT_NUMBER) {
    const date = this.toDateObj(this._value);
    switch (format) {
      case FORMAT['YYYY.MM.DD (WEEK) AMPM HH:mm']:
      case 1:
        return `${date.year}.${date.month}.${date.day} (${date.weekText}) ${date.hourText} ${
          date.hourAmPm
        }:${date.minutes}`;
    }
    return `${date.year}.${date.month}.${date.day} (${date.weekText}) ${date.hourText} ${
      date.hourAmPm
    }:${date.minutes}`;
  }
  private getWeekText(number: number = null): WEEK {
    switch (number) {
      case 0:
        return '일';
      case 1:
        return '월';
      case 2:
        return '화';
      case 3:
        return '수';
      case 4:
        return '목';
      case 5:
        return '금';
      case 6:
        return '토';
    }
    return '';
  }
  private getTwo(number: number): string {
    return `${number > 9 ? '' : '0'}${number}`;
  }
  private isPm(): boolean {
    return this._value.getHours() >= 12;
  }
  private getHourAMPM() {
    const hour = this._value.getHours();
    return this.isPm() && hour > 12 ? hour % 12 : hour;
  }
  private getAmPmText(): AM_PM {
    return this.isPm() ? '오후' : '오전';
  }
}
