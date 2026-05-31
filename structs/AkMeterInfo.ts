import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AkMeterInfo {
  fGridPeriod: number;
  fGridOffset: number;
  fTempo: number;
  uTimeSigNumBeatsBar: number;
  uTimeSigBeatValue: number;

  constructor(buffer: BufferedReader) {
    this.fGridPeriod = buffer.readDouble();
    this.fGridOffset = buffer.readDouble();
    this.fTempo = buffer.readFloat();
    this.uTimeSigNumBeatsBar = buffer.readByte();
    this.uTimeSigBeatValue = buffer.readByte();
  }

  write(buffer: BufferedWriter) {
    buffer.writeDouble(this.fGridPeriod);
    buffer.writeDouble(this.fGridOffset);
    buffer.writeFloat(this.fTempo);
    buffer.writeByte(this.uTimeSigNumBeatsBar);
    buffer.writeByte(this.uTimeSigBeatValue);
  }
}
