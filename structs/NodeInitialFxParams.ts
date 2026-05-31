import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class NodeInitialFxParams {
  bIsOverrideParentFX: number;
  uNumFx: number;

  constructor(buffer: BufferedReader) {
    this.bIsOverrideParentFX = buffer.readByte();
    this.uNumFx = buffer.readByte();
  }

  write(buffer: BufferedWriter) {
    buffer.writeByte(this.bIsOverrideParentFX);
    buffer.writeByte(this.uNumFx);
  }
}
