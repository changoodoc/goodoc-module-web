export declare namespace DATA_TRACKER {
  type FingerPrintId = string;
  type TreasureDataId = string;
  export type TrackerId = {
    fingerPrintId: FingerPrintId;
    treasureDataId: TreasureDataId;
  }
}

export interface IDataTracker {
  setPageViewAutoClicks(): void;
  getTrackerId(): Promise<DATA_TRACKER.TrackerId>;
  getTrackerIdByPageViewAutoClicks(): Promise<DATA_TRACKER.TrackerId>;
}
