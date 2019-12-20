import {DeepLinkSpace} from '../DeepLink/DeepLink.namespace';

export declare namespace AppsflyerSpace {
  interface Option {
    date: string; // 날짜 190422
    mediaSource: string; // pid: string; // Eventzone
    campaign: string; // c: string; // only_app
    contentId: string;
    ad: string; // 노출지면 web_event_main_topbanner
    adSet: string; // af_adset: string; // only_app_1
    dp_type: DeepLinkSpace.ContentType;
    dp_funnel: string; // {funnel}__app_funnel
    dp_sub_funnel?: string; // _E1234
    dp_contentId?: number;
    dp_additionPath?: DeepLinkSpace.AdditionPath;
    dp_categoryId?: number;
    dp_web?: string; // 웹 링크 적용 없을경우 https://www.goodoc.co.kr
  }
// 메인채널, 서브채널, 캠페인명, 광고 소재
  interface Option2 {
    pid: string; // Eventzone
    c: string; // only_app
    af_dp?: string;
    af_ad: string;
    af_adset: string; // only_app_1
    af_click_lookback: string; // 7d
    af_web_dp: string; // https://www.goodoc.co.kr
    af_sub1: string; // 날짜 190422
    af_sub2: string; // 노출지면 web_event_main_topbanner
    af_sub3: string; // td_clientId
    af_sub4: string; // fingerPrint
    af_sub5: string; // funnel
  }
}
