import {IDataTracker} from './interface-data-tracker';

export const DataTrackerStub: IDataTracker = {
  setTracker: jest.fn().mockImplementation(() => {
    return Promise.resolve({
      fingerPrintId: '{fingerPrintId}',
      treasureDataId: '{treasureDataId}'
    })
  }),
  getTrackerId: jest.fn().mockImplementation(() => {
    return Promise.resolve({
      fingerPrintId: '{fingerPrintId}',
      treasureDataId: '{treasureDataId}'
    })
  }),
};
