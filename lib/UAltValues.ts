import { BufferReader } from "../BufferReader";

export class UAltValues {
  value: number;

  constructor(reader: BufferReader) {
    this.value = reader.readUInt32();
  }
}
