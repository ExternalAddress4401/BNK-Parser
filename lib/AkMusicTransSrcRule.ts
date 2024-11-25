import { BufferReader } from "../BufferReader";

export class AkMusicTransSrcRule {
  transitionTime: number;
  eFadeCurve: number;
  iFadeOffset: number;
  eSyncType: number;
  uCueFilterHash: number;
  bPlayPostExit: number;

  constructor(reader: BufferReader) {
    this.transitionTime = reader.readUInt32();
    this.eFadeCurve = reader.readUInt32();
    this.iFadeOffset = reader.readInt32();
    this.eSyncType = reader.readUInt32();
    this.uCueFilterHash = reader.readUInt32();
    this.bPlayPostExit = reader.readByte();
  }
}
