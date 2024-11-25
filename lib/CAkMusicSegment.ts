import { BufferReader } from "../BufferReader";
import { MusicSegmentInitialValues } from "./MusicSegmentInitialValues";

export class CAkMusicSegment {
  eHircType: number;
  dwSectionSize: number;
  ulId: number;
  musicSegmentInitialValues: MusicSegmentInitialValues;

  constructor(reader: BufferReader) {
    this.eHircType = reader.readByte();
    this.dwSectionSize = reader.readUInt32();
    this.ulId = reader.readUInt32();
    this.musicSegmentInitialValues = new MusicSegmentInitialValues(reader);
  }
}
