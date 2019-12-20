class GDWebModuleImageUrl {
  static create(value: string): GDWebModuleImageUrl {
    return new GDWebModuleImageUrl(value);
  }
  private _imageV2Url: string;
  constructor(private readonly imageUrl: string) {}
  /**
   * @param origin = "https://staging.goodoc.co.kr"
   */
  getImageUrlByV2(originPath: string = ''): string {
    if (!this._imageV2Url) {
      let result = this.imageUrl;
      // "/uploads/hospital_notice/image/10004/http%3A/asset-staging.goodoc.kr/images/files/20190827/bbaded0aae64120b81a7ee466cc81c44.jpeg"
      const index = result.indexOf('http');
      if (index > -1) {
        // "http:/asset-staging.goodoc.kr/images/files/20190827/bbaded0aae64120b81a7ee466cc81c44.jpeg"
        result = result.substring(index);
        result = result.replace('http%3A/', 'https://');
        result = decodeURIComponent(result);
      } else {
        result = originPath + result;
      }
      this._imageV2Url = result;
    }
    return this._imageV2Url;
  }
  getImageUrl(): string {
    return this.imageUrl;
  }
}
export default GDWebModuleImageUrl;
