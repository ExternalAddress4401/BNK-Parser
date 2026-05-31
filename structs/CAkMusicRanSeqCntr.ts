import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { MusicRanSeqCntrInitialValues } from "./MusicRanSeqCntrInitialValues.js";

export class CAkMusicRanSeqCntr {
  eHircType: number;
  dwSectionSize: number;
  ulID: number;
  musicRanSeqCntrInitialValues: MusicRanSeqCntrInitialValues;

  constructor(buffer: BufferedReader) {
    this.eHircType = buffer.readByte();
    this.dwSectionSize = buffer.readUInt32();
    this.ulID = buffer.readUInt32();
    this.musicRanSeqCntrInitialValues = new MusicRanSeqCntrInitialValues(
      buffer,
    );
  }

  write(buffer: BufferedWriter) {
    buffer.writeByte(this.eHircType);
    buffer.writeUInt32(this.dwSectionSize);
    buffer.writeUInt32(this.ulID);

    this.musicRanSeqCntrInitialValues.write(buffer);
  }
}
