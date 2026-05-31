import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AkTrackSrcInfo {
  trackID: number;
  sourceID: number;
  eventID: number;
  fPlayAt: number;
  fBeginTrimOffset: number;
  fEndTrimOffset: number;
  fSrcDuration: number;

  constructor(buffer: BufferedReader) {
    this.trackID = buffer.readUInt32();
    this.sourceID = buffer.readUInt32();
    this.eventID = buffer.readUInt32();
    this.fPlayAt = buffer.readDouble();
    this.fBeginTrimOffset = buffer.readDouble();
    this.fEndTrimOffset = buffer.readDouble();
    this.fSrcDuration = buffer.readDouble();
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    buffer.writeUInt32(this.trackID);
    buffer.writeUInt32(this.sourceID);
    buffer.writeUInt32(this.eventID);
    buffer.writeDouble(this.fPlayAt);
    buffer.writeDouble(this.fBeginTrimOffset);
    buffer.writeDouble(this.fEndTrimOffset);
    buffer.writeDouble(this.fSrcDuration);
    return buffer.index - start;
  }
}
