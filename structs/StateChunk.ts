import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class StateChunk {
  stateProps: any[] = [];
  pStateChunks: any[] = [];

  constructor(buffer: BufferedReader) {
    const ulNumStateProps = buffer.readByte();
    const ulNumStateGroups = buffer.readByte();
  }

  write(buffer: BufferedWriter) {
    buffer.writeByte(this.stateProps.length);
    buffer.writeByte(this.pStateChunks.length);
  }
}
