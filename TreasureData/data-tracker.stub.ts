import {IDataTracker} from './interface-data-tracker';

export const DataTrackerStub: IDataTracker = {
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
