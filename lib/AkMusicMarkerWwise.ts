import { BufferReader } from "../BufferReader";

export class AkMusicMarkerWwise {
  id: number;
  fPosition: number;
  pMarkerName: number;

  constructor(reader: BufferReader) {
    this.id = reader.readInt32();
    this.fPosition = reader.readDouble();
    this.pMarkerName = reader.readByte(); // incorrect
  }
}
