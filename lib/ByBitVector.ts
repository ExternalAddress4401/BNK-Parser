import { BufferReader } from "../BufferReader";

export class ByBitVector {
  value: number;

  constructor(reader: BufferReader) {
    this.value = reader.readByte();
  }
}
