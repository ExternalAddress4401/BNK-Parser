import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { AkRTPCGraphPoint } from "./AkRTPCGraphPoint.js";

export class AkClipAutomation {
  uClipIndex: number;
  eAutoType: number;
  pArrayGraphPoints: AkRTPCGraphPoint[] = [];

  constructor(buffer: BufferedReader) {
    this.uClipIndex = buffer.readUInt32();
    this.eAutoType = buffer.readUInt32();

    const uNumPoints = buffer.readUInt32();
    for (var i = 0; i < uNumPoints; i++) {
      this.pArrayGraphPoints.push(new AkRTPCGraphPoint(buffer));
    }
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    buffer.writeUInt32(this.uClipIndex);
    buffer.writeUInt32(this.eAutoType);
    buffer.writeUInt32(this.pArrayGraphPoints.length);
    for (const item of this.pArrayGraphPoints) {
      item.write(buffer);
    }
    return buffer.index - start;
  }
}
