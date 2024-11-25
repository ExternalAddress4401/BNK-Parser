import { BufferReader } from "../BufferReader";

export class Children {
  ulNumChilds: number;
  ulChildId: number;

  constructor(reader: BufferReader) {
    this.ulNumChilds = reader.readUInt32();
    this.ulChildId = reader.readInt32();
  }
}
