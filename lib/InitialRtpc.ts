import { BufferReader } from "../BufferReader";

export class InitialRtpc {
  uNumCurves: number;
  pRtpcMgr: number[] = [];

  constructor(reader: BufferReader) {
    this.uNumCurves = reader.readUShort();
  }
}
