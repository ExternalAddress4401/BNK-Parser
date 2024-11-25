import { BufferReader } from "../BufferReader";

export class BitFlag {
  value: number;

  constructor(reader: BufferReader) {
    this.value = reader.readByte();
  }
}
