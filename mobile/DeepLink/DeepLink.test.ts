import {DeepLink} from './DeepLink';

// https://docs.google.com/spreadsheets/d/1PZ7x7WRoR53cX_z30wPWHAKMW9KqDKDD4RdPegyaeu8/edit#gid=1403408430

describe('DeepLink 객체를', () => {
  test('병원정보보기', () => {
    // goodoc://HospitalDetail{hospitalid}?Funnel=web_hospitaldetail_button
    const a = DeepLink.create('hospitals', {contentId: 1234}).setFunnel('web_hospitaldetail_button');
    expect(a.value).toBe('goodoc%3A%2F%2Fhospitals%2F1234%3FFunnel%3Dweb_hospitaldetail_button');
    expect(decodeURIComponent(a.value)).toBe('goodoc://hospitals/1234?Funnel=web_hospitaldetail_button');
  });
  test('유의사항 더보기 버튼', () => {
    // goodoc://casts?Funnel=web_cast_list_buttenmore
    const a = DeepLink.create('casts').setFunnel('web_cast_list_buttenmore');
    expect(a.value).toBe('goodoc%3A%2F%2Fcasts%3FFunnel%3Dweb_cast_list_buttenmore');
    expect(decodeURIComponent(a.value)).toBe('goodoc://casts?Funnel=web_cast_list_buttenmore');
  });
  test('접수후 하단배너', () => {
    // goodoc://casts?Funnel=web_receipt_bottom_banner
    const a = DeepLink.create('casts').setFunnel('web_receipt_bottom_banner');
    expect(a.value).toBe('goodoc%3A%2F%2Fcasts%3FFunnel%3Dweb_receipt_bottom_banner');
    expect(decodeURIComponent(a.value)).toBe('goodoc://casts?Funnel=web_receipt_bottom_banner');
  });
  test('진료완료후 하단배너', () => {
    // goodoc://main?Funnel=web_complete_bottom_banner
    const a = DeepLink.create('main').setFunnel('web_complete_bottom_banner');
    expect(a.value).toBe('goodoc%3A%2F%2Fmain%3FFunnel%3Dweb_complete_bottom_banner');
    expect(decodeURIComponent(a.value)).toBe('goodoc://main?Funnel=web_complete_bottom_banner');
  });
});
