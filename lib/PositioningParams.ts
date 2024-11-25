import { BufferReader } from "../BufferReader";

export class PositioningParams {
  uBitsPositioning: number;

  constructor(reader: BufferReader) {
    this.uBitsPositioning = reader.readByte();
  }
}
