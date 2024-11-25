import { BufferReader } from "../BufferReader";

export class USourceBits {
  value: number;

  constructor(reader: BufferReader) {
    this.value = reader.readByte();
  }
}
