import { DeepLink } from '../DeepLink/DeepLink';
import { AppsflyerSpace } from './Appsflyer.namespace';

// https://hq1.appsflyer.com
// https://docs.google.com/spreadsheets/d/1PZ7x7WRoR53cX_z30wPWHAKMW9KqDKDD4RdPegyaeu8/edit#gid=0
export default class Appsflyer {
  static origin = 'https://goodoc.onelink.me';
  static fingerPrint = '';
  static clientId = '';
  static create = (OneLinkID: string, data?: AppsflyerSpace.Option) => {
    const {
      mediaSource,
      campaign,
      contentId,
      dp_type,
      dp_contentId,
      dp_additionPath,
      dp_categoryId,
      dp_funnel,
      dp_sub_funnel,
      dp_web,
      adSet,
      date,
      ad
    } = data;
    return new Appsflyer(OneLinkID, {
      af_dp: DeepLink.create(dp_type, {
        contentId: dp_contentId || 0,
        additionPath: dp_additionPath,
        categoryId: dp_categoryId || 0
      }).setFunnel(`${'origin'}__${dp_funnel}`, dp_sub_funnel || '').value,
      pid: mediaSource || '', // id
      c: campaign || '',
      af_ad: ad || '0',
      af_adset: adSet || '',
      af_click_lookback: '7d',
      af_web_dp: encodeURIComponent(dp_web || 'https://www.goodoc.co.kr'),
      af_sub1: date, // 날짜
      af_sub2: contentId || '', // 노출 지면
      af_sub3: Appsflyer.clientId,
      af_sub4: Appsflyer.fingerPrint,
      af_sub5: 'origin'
    });
  };
  private readonly _value: string;
  constructor(OneLinkID: string, data: AppsflyerSpace.Option2) {
    const list = [];
    for (let key in data) {
      list.push([key, data[key] || '']);
    }
    this._value = `${Appsflyer.origin}/${OneLinkID}?${list
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
  }
  get value(): string {
    return this._value || '';
  }
}
