import { BufferReader } from "../BufferReader";

export class AkMeterInfo {
  fGridPeriod: number;
  fGridOffset: number;
  fTempo: number;
  uTimeSigNumBeatsBar: number;
  uTimeSigBeatValue: number;

  constructor(reader: BufferReader) {
    this.fGridPeriod = reader.readDouble();
    this.fGridOffset = reader.readDouble();
    this.fTempo = reader.readFloat();
    this.uTimeSigNumBeatsBar = reader.readByte();
    this.uTimeSigBeatValue = reader.readByte();
  }
}
