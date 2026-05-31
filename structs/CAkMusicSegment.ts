import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { MusicSegmentInitialValues } from "./MusicSegmentInitialValues.js";

export class CAkMusicSegment {
  eHircType: number;
  dwSectionSize: number;
  ulID: number;
  musicSegmentInitialValues: MusicSegmentInitialValues;

  constructor(buffer: BufferedReader) {
    this.eHircType = buffer.readByte();
    this.dwSectionSize = buffer.readUInt32();
    this.ulID = buffer.readUInt32();
    this.musicSegmentInitialValues = new MusicSegmentInitialValues(buffer);
  }

  write(buffer: BufferedWriter) {
    buffer.writeByte(this.eHircType);
    buffer.writeUInt32(this.dwSectionSize);
    buffer.writeUInt32(this.ulID);

    this.musicSegmentInitialValues.write(buffer);
  }
}
