import { BufferReader } from "../BufferReader";

export class NodeInitialFxParams {
  bIsOverrideParentFx: number;
  uNumFx: number;

  constructor(reader: BufferReader) {
    this.bIsOverrideParentFx = reader.readByte();
    this.uNumFx = reader.readByte();
  }
}
