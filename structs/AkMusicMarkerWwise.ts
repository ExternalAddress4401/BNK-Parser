import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AkMusicMarkerWwise {
  id: number;
  fPosition: number;
  pMarkerName: string;

  constructor(buffer: BufferedReader) {
    this.id = buffer.readUInt32();
    this.fPosition = buffer.readDouble();
    this.pMarkerName = buffer.readString();
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    buffer.writeUInt32(this.id);
    buffer.writeDouble(this.fPosition);
    buffer.writeString(this.pMarkerName);
    return buffer.index - start;
  }
}
