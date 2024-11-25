import { BufferReader } from "../BufferReader";

export class AkRtpcGraphPoint {
  from: number;
  to: number;
  readFloat: number;

  constructor(reader: BufferReader) {
    this.from = reader.readFloat();
    this.to = reader.readFloat();
    this.readFloat = reader.readUInt32();
  }
}
