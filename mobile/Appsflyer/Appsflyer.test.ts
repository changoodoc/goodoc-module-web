import {DeepLink} from '../DeepLink/DeepLink';
import Appsflyer from './Appsflyer';

describe('Appsflyer 객체에서', () => {
  const OneLinkID = '7srm';
  test('앱스플라이어 링크를 만들수 있다.', () => {
    const a = new Appsflyer(OneLinkID, {
      af_dp: DeepLink.create('hospitals', {
        contentId: 123,
      }).value,
      pid: 'Hospital+Pharmacy',
      c: 'webtoapp',
      af_adset: 'web_hospitaldetail_popup',
      af_ad: 'h_popup1',
      af_click_lookback: '7d',
      af_web_dp: encodeURIComponent('https://www.goodoc.co.kr'),
      af_sub1: '190422',
      af_sub2: '123',
      af_sub3: '1',
      af_sub4: '2',
      af_sub5: 'organic'
    });
    expect(a.value).toBe('https://goodoc.onelink.me/7srm?af_dp=goodoc%3A%2F%2Fhospitals%2F123&pid=Hospital+Pharmacy&c=webtoapp&af_adset=web_hospitaldetail_popup&af_ad=h_popup1&af_click_lookback=7d&af_web_dp=https%3A%2F%2Fwww.goodoc.co.kr&af_sub1=190422&af_sub2=123&af_sub3=1&af_sub4=2&af_sub5=organic');
  });
});
