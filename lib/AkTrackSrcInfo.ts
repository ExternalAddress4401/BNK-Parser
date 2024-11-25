import { BufferReader } from "../BufferReader";

export class AkTrackSrcInfo {
  trackId: number;
  sourceId: number;
  eventId: number;
  fPlayAt: number;
  fBeginTrimOffset: number;
  fEndTrimOffset: number;
  fSrcDuration: number;

  constructor(reader: BufferReader) {
    this.trackId = reader.readUInt32();
    this.sourceId = reader.readInt32();
    this.eventId = reader.readInt32();
    this.fPlayAt = reader.readDouble();
    this.fBeginTrimOffset = reader.readDouble();
    this.fEndTrimOffset = reader.readDouble();
    this.fSrcDuration = reader.readDouble();
  }
}
