import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AkRTPCGraphPoint {
  From: number;
  To: number;
  Interp: number;

  constructor(buffer: BufferedReader) {
    this.From = buffer.readFloat();
    this.To = buffer.readFloat();
    this.Interp = buffer.readUInt32();
  }

  write(buffer: BufferedWriter) {
    buffer.writeFloat(this.From);
    buffer.writeFloat(this.To);
    buffer.writeUInt32(this.Interp);
  }
}
