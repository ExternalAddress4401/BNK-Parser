import { BufferReader } from "../BufferReader";
import { USourceBits } from "./USourceBits";

export class AkMediaInformation {
  sourceId: number;
  uInMemoryMediaSize: number;
  uSourceBits: USourceBits;

  constructor(reader: BufferReader) {
    this.sourceId = reader.readInt32();
    this.uInMemoryMediaSize = reader.readUInt32();
    this.uSourceBits = new USourceBits(reader);
  }
}
