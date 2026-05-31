import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AkMusicTransSrcRule {
  transitionTime: number;
  eFadeCurve: number;
  iFadeOffset: number;
  eSyncType: number;
  uCueFilterHash: number;
  bPlayPostExit: number;

  constructor(buffer: BufferedReader) {
    this.transitionTime = buffer.readInt32();
    this.eFadeCurve = buffer.readUInt32();
    this.iFadeOffset = buffer.readInt32();
    this.eSyncType = buffer.readUInt32();
    this.uCueFilterHash = buffer.readUInt32();
    this.bPlayPostExit = buffer.readByte();
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    buffer.writeInt32(this.transitionTime);
    buffer.writeUInt32(this.eFadeCurve);
    buffer.writeInt32(this.iFadeOffset);
    buffer.writeUInt32(this.eSyncType);
    buffer.writeUInt32(this.uCueFilterHash);
    buffer.writeByte(this.bPlayPostExit);
    return buffer.index - start;
  }
}
