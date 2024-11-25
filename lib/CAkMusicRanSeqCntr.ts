import { BufferReader } from "../BufferReader";
import { MusicRanSeqCntrInitialValues } from "./MusicRanSeqCntrInitialValues";

export class CAkMusicRanSeqCntr {
  eHircType: number;
  dwSectionSize: number;
  ulId: number;
  musicRanSeqCntrInitialValues: MusicRanSeqCntrInitialValues;

  constructor(reader: BufferReader) {
    this.eHircType = reader.readByte();
    this.dwSectionSize = reader.readUInt32();
    this.ulId = reader.readUInt32();
    this.musicRanSeqCntrInitialValues = new MusicRanSeqCntrInitialValues(
      reader
    );
  }
}
