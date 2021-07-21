import { DeepLinkSpace } from './DeepLink.namespace';

// https://docs.google.com/spreadsheets/d/1eWtktfD3f4y11Or7paGSeyaLOHrp21egSqMCU5ah4e4/edit#gid=1762994457
export class DeepLink implements DeepLinkSpace.IDeepLink {
  static readonly origin = 'goodoc://';
  static create(type: DeepLinkSpace.ContentType, data?: DeepLinkSpace.Parameter) {
    return new DeepLink(type, data || {});
  }
  private _value: string;
  constructor(type: DeepLinkSpace.ContentType, data: DeepLinkSpace.Parameter) {
    this._value = `${DeepLink.origin}${type}${data.contentId ? '/' + data.contentId : ''}${
      data.additionPath ? data.additionPath : ''
    }`;
    if (data.categoryId) {
      this._value += '?categoryid=' + data.categoryId;
    }
  }
  setFunnel(funnel: string, subFunnel: string = '') {
    if (this._value.indexOf('Funnel') === -1) {
      const key = 'Funnel=';
      let value = this._value;
      value += this._value.indexOf('?') > -1 ? '&' : '?';
      value += key;
      value += funnel;
      value += subFunnel ? '_' + subFunnel : '';
      this._value = value;
    }
    return this;
  }
  get value() {
    return encodeURIComponent(this._value);
  }
}
