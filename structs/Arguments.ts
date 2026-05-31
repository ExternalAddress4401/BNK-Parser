import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { AkGameSync } from "./AkGameSync.js";

export class Arguments {
  pArguments: AkGameSync[] = [];
  uTreeDataSize: number;
  uMode: number;

  constructor(buffer: BufferedReader, size: number) {
    for (let i = 0; i < size; i++) {
      this.pArguments.push(new AkGameSync(buffer));
    }
    this.uTreeDataSize = buffer.readUInt32();
    this.uMode = buffer.readByte();
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    for (const item of this.pArguments) {
      item.write(buffer);
    }
    buffer.writeUInt32(this.uTreeDataSize);
    buffer.writeByte(this.uMode);
    return buffer.index - start;
  }
}
