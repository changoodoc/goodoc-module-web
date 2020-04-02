import {IDataTracker} from './data-tracker';

export const DataTrackerMock: IDataTracker = {
  trackRequest: (path: string, body: string, token: string, code: string, message: string, table: string) => {
    console.log(path, body, token, code, message, table);
    return null;
  },
  setPageViewAutoClicks: () => {
    return null;
  },
  getTrackerId: () => {
    return Promise.resolve({
      fingerPrintId: '{fingerPrintId}',
      treasureDataId: '{treasureDataId}'
    })
  },
  getTrackerIdByPageViewAutoClicks: () => {
    return Promise.resolve({
      fingerPrintId: '{fingerPrintId}',
      treasureDataId: '{treasureDataId}'
    })
  },
};
