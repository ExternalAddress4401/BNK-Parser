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
    buffer.writeUInt32(this.dwSectionSize);
    buffer.writeUInt32(this.ulID);

    this.musicTrackInitialValues.write(buffer);
  }
}
