import Treasure from 'td-js-sdk';
import Fingerprint2 from 'fingerprintjs2';

import {IDataTracker, DATA_TRACKER} from './interface-data-tracker';

const HOST = 'in.treasuredata.com';
const WRITE_KEY = '9525/8390cc895a8785a913ecef0751d5c2a44760f1a0';

export default class DataTracker implements IDataTracker {
  private static _instance: DataTracker = null;
  static instance = (database: string, table?: string) => {
    return (
      DataTracker._instance || (DataTracker._instance = new DataTracker(database, table))
    );
  };
  private _td: Treasure;
  private treasureDataId: string;
  private fingerprintId: string;
  constructor(
    database: string,
    private _table: string
  ) {
    this._td = new Treasure({
      host: HOST,
      writeKey: WRITE_KEY,
      database,
    });
  }
  setTracker(): Promise<DATA_TRACKER.TrackerId> {
    return new Promise((resolve) => {
      try {
        if(this.fingerprintId) {
          this.commandTrackerPageViewClicks(this.fingerprintId);
          resolve({
            fingerPrintId: this.fingerprintId,
            treasureDataId: this.treasureDataId,
          })
        } else {
          Fingerprint2.getV18({}, (id) => {
            this.commandTrackerPageViewClicks(id);
            this.fingerprintId = id;
            this.treasureDataId = this._td.getCookie('_td');
            resolve({
              fingerPrintId: this.fingerprintId,
              treasureDataId: this.treasureDataId
            });
          });
        }
      } catch(err) {
        console.error(err.message);
        resolve({
          fingerPrintId: '',
          treasureDataId: '',
        })
      }
    })
  };

  getTrackerId(): Promise<DATA_TRACKER.TrackerId> {
    return new Promise((resolve) => {
      try {
        if(this.fingerprintId) {
          resolve({
            fingerPrintId: this.fingerprintId,
            treasureDataId: this.treasureDataId,
          })
        } else {
          Fingerprint2.getV18({}, (id) => {
            this.fingerprintId = id;
            this.treasureDataId = this._td.getCookie('_td');
            resolve({
              fingerPrintId: this.fingerprintId,
              treasureDataId: this.treasureDataId
            });
          });
        }
      } catch(err) {
        console.error(err.message);
        resolve({
          fingerPrintId: '',
          treasureDataId: '',
        })
      }
    })
  };
  // 핑거 프린트가 세팅된 후부터 트래킹을 시작한다.
  protected setConfig(id) {
    this._td.set('$global', 'td_fingerprint_id', id);
    this._td.setSignedMode();
  }
  protected setAutoClicks() {
    // Setup an event listener to automatically log clicks.
    this._td.trackClicks();
  }
  protected setPageView() {
    this._td.trackPageview('pageviews');
  }
  protected commandTrackerPageViewClicks(id) {
    this.setConfig(id);
    this.setAutoClicks();
    this.setPageView();
  }
}
