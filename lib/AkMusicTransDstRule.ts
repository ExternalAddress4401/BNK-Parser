import { BufferReader } from "../BufferReader";

export class AkMusicTransDstRule {
  transitionTime: number;
  eFadeCurve: number;
  iFadeCurve: number;
  uCueFilterHash: number;
  uJumpToId: number;
  eJumpToType: number;
  eEntryType: number;
  bPlayPreEnter: number;
  bDestMatchSourceCueName: number;

  constructor(reader: BufferReader) {
    this.transitionTime = reader.readInt32();
    this.eFadeCurve = reader.readUInt32();
    this.iFadeCurve = reader.readInt32();
    this.uCueFilterHash = reader.readUInt32();
    this.uJumpToId = reader.readInt32();
    this.eJumpToType = reader.readUShort();
    this.eEntryType = reader.readUShort();
    this.bPlayPreEnter = reader.readByte();
    this.bDestMatchSourceCueName = reader.readByte();

    console.log(this);
    process.exit();
  }
}
