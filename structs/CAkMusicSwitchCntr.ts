import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { MusicSwitchCntrInitialValues } from "./MusicSwitchCntrInitialValues.js";

export class CAkMusicSwitchCntr {
  eHircType: number;
  dwSectionSize: number;
  ulID: number;
  musicRanSeqCntrInitialValues: MusicSwitchCntrInitialValues;

  constructor(buffer: BufferedReader) {
    this.eHircType = buffer.readByte();
    this.dwSectionSize = buffer.readUInt32();
    this.ulID = buffer.readUInt32();
    this.musicRanSeqCntrInitialValues = new MusicSwitchCntrInitialValues(
      buffer,
    );
  }

  write(buffer: BufferedWriter) {
    buffer.writeByte(this.eHircType);
    buffer.writeUInt32(this.dwSectionSize);
    buffer.writeInt32(this.ulID);

    this.musicRanSeqCntrInitialValues.write(buffer);
  }
}
