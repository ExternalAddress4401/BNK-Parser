import { BitField } from "../BitField.js";
import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AkMediaInformation {
  sourceID: number;
  uInMemoryMediaSize: number;
  uSourceBits: BitField;

  constructor(buffer: BufferedReader) {
    this.sourceID = buffer.readTid();
    this.uInMemoryMediaSize = buffer.readUInt32();
    this.uSourceBits = new BitField(buffer.readByte(), "uint8");
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    buffer.writeUInt32(this.sourceID);
    buffer.writeUInt32(this.uInMemoryMediaSize);
    this.uSourceBits.write(buffer);
    return buffer.index - start;
  }
}
