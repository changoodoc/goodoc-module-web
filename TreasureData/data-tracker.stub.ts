import {IDataTracker} from './data-tracker';

export const DataTrackerStub: IDataTracker = {
  trackRequest: jest.fn().mockImplementation((path: string, body: string, token: string, code: string, message: string, table: string) => {
    return null;
  }),
  setPageViewAutoClicks: jest.fn().mockImplementation(() => {
    return null;
  }),
  getTrackerId: jest.fn().mockImplementation(() => {
    return Promise.resolve({
      fingerPrintId: '{fingerPrintId}',
      treasureDataId: '{treasureDataId}'
    })
  }),
  getTrackerIdByPageViewAutoClicks: jest.fn().mockImplementation(() => {
    return Promise.resolve({
      fingerPrintId: '{fingerPrintId}',
      treasureDataId: '{treasureDataId}'
    })
  }),
};
