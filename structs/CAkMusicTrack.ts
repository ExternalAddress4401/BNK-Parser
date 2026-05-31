import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { MusicTrackInitialValues } from "./MusicTrackInitialValues.js";

export class CAkMusicTrack {
  eHircType: number;
  dwSectionSize: number;
  ulID: number;
  musicTrackInitialValues: MusicTrackInitialValues;

  constructor(buffer: BufferedReader) {
    this.eHircType = buffer.readByte();
    this.dwSectionSize = buffer.readUInt32();
    this.ulID = buffer.readSid();

    this.musicTrackInitialValues = new MusicTrackInitialValues(buffer);
  }

  write(buffer: BufferedWriter) {
    buffer.writeByte(this.eHircType);
    const sizeOffset = buffer.index;
    buffer.writeUInt32(0);
    const start = buffer.index;
    buffer.writeUInt32(this.ulID);
    this.musicTrackInitialValues.write(buffer);
    buffer.writeUInt32At(sizeOffset, buffer.index - start);
  }
}
