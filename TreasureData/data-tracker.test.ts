import { DataTrackerStub } from './data-tracker.stub';

describe('Treasure', () => {
  const Tracker = DataTrackerStub;
  // jest 에서는 getCookie 를 구현할 수 없어서 stub 으로 대신 한다.
  test('getTrackerId', () => {
    Tracker.getTrackerId().then(({ fingerPrintId, treasureDataId }) => {
      expect(fingerPrintId).toBe('{fingerPrintId}');
      expect(treasureDataId).toBe('{treasureDataId}');
    });
  });
});
