import { BufferReader } from "../BufferReader";
import { AkRtpcGraphPoint } from "./AkRtpcGraphPoint";

export class AkClipAutomation {
  uClipIndex: number;
  eAutoType: number;
  uNumPoints: number;
  akRtpcGraphPoint: AkRtpcGraphPoint[] = [];

  constructor(reader: BufferReader) {
    this.uClipIndex = reader.readUInt32();
    this.eAutoType = reader.readUInt32();
    this.uNumPoints = reader.readUInt32();

    for (let i = 0; i < this.uNumPoints; i++) {
      this.akRtpcGraphPoint.push(new AkRtpcGraphPoint(reader));
    }
  }
}
