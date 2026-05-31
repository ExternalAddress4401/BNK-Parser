import { BitField } from "../BitField.js";
import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class PositioningParams {
  uBitsPositioning: BitField;

  constructor(buffer: BufferedReader) {
    this.uBitsPositioning = new BitField(buffer.readByte(), "uint8");
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    this.uBitsPositioning.write(buffer);
    return buffer.index - start;
  }
}
