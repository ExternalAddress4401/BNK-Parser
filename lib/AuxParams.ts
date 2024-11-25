import { BufferReader } from "../BufferReader";

export class AuxParams {
  byBitVectior: number;
  reflectionsAuxBus: number;

  constructor(reader: BufferReader) {
    this.byBitVectior = reader.readByte();
    this.reflectionsAuxBus = reader.readInt32();
  }
}
