import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AkMusicTransDstRule {
  transitionTime: number;
  eFadeCurve: number;
  iFadeOffset: number;
  uCueFilterHash: number;
  uJumpToID: number;
  eJumpToType: number;
  eEntryType: number;
  bPlayPreEntry: number;
  bDestMatchSourceCueName: number;

  constructor(buffer: BufferedReader) {
    this.transitionTime = buffer.readInt32();
    this.eFadeCurve = buffer.readUInt32();
    this.iFadeOffset = buffer.readInt32();
    this.uCueFilterHash = buffer.readUInt32();
    this.uJumpToID = buffer.readTid();
    this.eJumpToType = buffer.readShort();
    this.eEntryType = buffer.readShort();
    this.bPlayPreEntry = buffer.readByte();
    this.bDestMatchSourceCueName = buffer.readByte();
  }

  write(buffer: BufferedWriter) {
    buffer.writeInt32(this.transitionTime);
    buffer.writeUInt32(this.eFadeCurve);
    buffer.writeInt32(this.iFadeOffset);
    buffer.writeUInt32(this.uCueFilterHash);
    buffer.writeUInt32(this.uJumpToID);
    buffer.writeShort(this.eJumpToType);
    buffer.writeShort(this.eEntryType);
    buffer.writeByte(this.bPlayPreEntry);
    buffer.writeByte(this.bDestMatchSourceCueName);
  }
}
