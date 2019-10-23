export declare namespace DeepLinkSpace {
  type ContentType = 'events' | 'casts' | 'nearmap' | 'hospitals' | 'pharmacys' | 'mypage' | 'events/packages' | 'main';
  type AdditionPath = '/map';
  interface Parameter {
    contentId?: number; // 12345
    additionPath?: AdditionPath; // /map
    categoryId?: number; // 85
  }
  interface IDeepLink {
    setFunnel(funnel: string): IDeepLink;
    value: string;
  }
}
