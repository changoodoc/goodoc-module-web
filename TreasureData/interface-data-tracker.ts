export declare namespace DATA_TRACKER {
  type FingerPrintId = string;
  type TreasureDataId = string;
  export type TrackerId = {
    fingerPrintId: FingerPrintId;
    treasureDataId: TreasureDataId;
  }
}

export interface IDataTracker {
  setTracker(): Promise<DATA_TRACKER.TrackerId>;
  getTrackerId(): Promise<DATA_TRACKER.TrackerId>;
}
