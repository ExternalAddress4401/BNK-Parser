import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AkGameSync {
  ulGroup: number;
  eGroupType: number;

  constructor(buffer: BufferedReader) {
    this.ulGroup = buffer.readUInt32();
    this.eGroupType = buffer.readByte();
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    buffer.writeUInt32(this.ulGroup);
    buffer.writeByte(this.eGroupType);
    return buffer.index - start;
  }
}
