import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class Children {
  ulChildIDs: number[] = [];

  constructor(buffer: BufferedReader) {
    const ulNumChilds = buffer.readUInt32();

    for (let i = 0; i < ulNumChilds; i++) {
      this.ulChildIDs.push(buffer.readUInt32());
    }
  }

  write(buffer: BufferedWriter) {
    buffer.writeUInt32(this.ulChildIDs.length);
    for (const item of this.ulChildIDs) {
      buffer.writeUInt32(item);
    }
  }
}
