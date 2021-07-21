export default class GDWebModulePlatform {
  private readonly IS_AND: boolean;
  private readonly IS_IOS: boolean;
  private readonly IS_MOBILE: boolean;
  private static _instance = null;
  static instance() {
    if (!GDWebModulePlatform._instance) {
      GDWebModulePlatform._instance = new GDWebModulePlatform();
    }
    return GDWebModulePlatform._instance;
  }
  constructor() {
    this.IS_AND = this.isMobileToUserAgent(['Android']);
    this.IS_IOS = this.isMobileToUserAgent(['iPhone', 'iPad']);
    this.IS_MOBILE = this.IS_AND || this.IS_IOS;
  }

  get isAndroid() {
    return this.IS_AND;
  }
  get isIOS() {
    return this.IS_IOS;
  }
  get isMobile() {
    return this.IS_MOBILE;
  }

  private isMobileToUserAgent(arg) {
    const userAgent = window.navigator.userAgent;
    const length = arg.length;
    for (let i = 0; i < length; i++) {
      if (userAgent.indexOf(arg[i]) > 0) {
        return true;
      }
    }
    return false;
  }
}
