import { BitField } from "../BitField.js";
import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AuxParams {
  byBitVector: BitField;
  reflectionAuxBus: number;

  constructor(buffer: BufferedReader) {
    this.byBitVector = new BitField(buffer.readByte(), "uint8");
    this.reflectionAuxBus = buffer.readTid();
  }

  write(buffer: BufferedWriter) {
    this.byBitVector.write(buffer);
    buffer.writeUInt32(this.reflectionAuxBus);
  }
}
