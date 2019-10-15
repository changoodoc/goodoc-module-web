import Treasure from 'td-js-sdk';
import Fingerprint2 from 'fingerprintjs2';

type DTFingerPrintId = string;
type DTTreasureDataId = string;
type DTTrackerId = {
  fingerPrintId: DTFingerPrintId;
  treasureDataId: DTTreasureDataId;
}

export interface IDataTracker {
  setPageViewAutoClicks(): void;
  getTrackerId(): Promise<DTTrackerId>;
  getTrackerIdByPageViewAutoClicks(): Promise<DTTrackerId>;
  trackRequest(path: string, body: string, token: string, code: string, message: string, table?: string): void;
}

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
  private _treasureDataId: DTTreasureDataId;
  private _fingerprintId: DTFingerPrintId;
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
  setPageViewAutoClicks(): void {
    try {
      if(this._fingerprintId) {
        this.commandTrackerPageViewClicks(this._fingerprintId);
      } else {
        Fingerprint2.getV18({}, (id) => {
          this.commandTrackerPageViewClicks(id);
          this._fingerprintId = id;
          this._treasureDataId = this._td.getCookie('_td');
        });
      }
    } catch(err) {
      console.error(err.message);
    }
  };
  getTrackerId(): Promise<DTTrackerId> {
    return new Promise((resolve) => {
      try {
        if(this._fingerprintId) {
          resolve({
            fingerPrintId: this._fingerprintId,
            treasureDataId: this._treasureDataId,
          })
        } else {
          Fingerprint2.getV18({}, (id) => {
            this._fingerprintId = id;
            this._treasureDataId = this._td.getCookie('_td');
            resolve({
              fingerPrintId: this._fingerprintId,
              treasureDataId: this._treasureDataId
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
  getTrackerIdByPageViewAutoClicks(): Promise<DTTrackerId> {
    return new Promise((resolve) => {
      try {
        if(this._fingerprintId) {
          this.commandTrackerPageViewClicks(this._fingerprintId);
          resolve({
            fingerPrintId: this._fingerprintId,
            treasureDataId: this._treasureDataId,
          })
        } else {
          Fingerprint2.getV18({}, (id) => {
            this.commandTrackerPageViewClicks(id);
            this._fingerprintId = id;
            this._treasureDataId = this._td.getCookie('_td');
            resolve({
              fingerPrintId: this._fingerprintId,
              treasureDataId: this._treasureDataId
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
  }
  trackRequest(path: string, body: string, token: string, code: string, message: string, table: string): void {
    try {
      const data = {
        gd_type: 'request',
        gd_path: path,
        gd_body: body,
        gd_token: token,
        gd_code: code,
        gd_message: message
      };
      this._td.trackEvent(table, data);
    } catch (e) {
      console.error(e.message);
    }
  }
  // 핑거 프린트가 세팅된 후부터 트래킹을 시작한다.
  protected setConfig(id): void {
    this._td.set('$global', 'td_fingerprint_id', id);
    this._td.setSignedMode();
  }
  protected setAutoClicks(): void {
    // Setup an event listener to automatically log clicks.
    this._td.trackClicks();
  }
  protected setPageView(): void {
    this._td.trackPageview('pageviews');
  }
  protected commandTrackerPageViewClicks(id): void {
    this.setConfig(id);
    this.setAutoClicks();
    this.setPageView();
  }
}
