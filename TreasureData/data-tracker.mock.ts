import {IDataTracker} from './data-tracker';
import Logger from '@gd-common/useCase/Log/logger';

export const DataTrackerMock: IDataTracker = {
  trackRequest: (path: string, body: string, token: string, code: string, message: string, table: string) => {
    Logger.instance().onLog(path, body, token, code, message, table);
    return null;
  },
  trackPageView: () => {
    Logger.instance().onLog('pageviews');
    return null;
  },
  setPageViewAutoClicks: () => {
    return null;
  },
  setAutoClicks: () => {
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
