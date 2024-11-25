import { BufferReader } from "../BufferReader";

export class StateChunk {
  ulNumStateProps: number;
  stateProps: number[] = [];
  ulNumStateGroups: number;
  pStateChunks: number[] = [];

  constructor(reader: BufferReader) {
    this.ulNumStateProps = reader.readByte();
    this.ulNumStateGroups = reader.readByte();
  }
}
