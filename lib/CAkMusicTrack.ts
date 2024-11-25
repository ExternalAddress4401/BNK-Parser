import { BufferReader } from "../BufferReader";
import { MusicTrackInitialValues } from "./MusicTrackInitialValues";

export class CAkMusicTrack {
  eHircType: number;
  dwSelectionSize: number;
  ulId: number;
  musicTrackInitialValues: MusicTrackInitialValues;

  constructor(reader: BufferReader) {
    this.eHircType = reader.readByte();
    this.dwSelectionSize = reader.readUInt32();
    this.ulId = reader.readUInt32();
    this.musicTrackInitialValues = new MusicTrackInitialValues(reader);
  }
}
