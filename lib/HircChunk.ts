import { BufferReader } from "../BufferReader";
import { LoadedItem } from "./LoadedItem";

export class HircChunk {
  dwTag: string;
  dwChunkSize: number;
  numReleasableHircItem: number;
  listLoadedItem: LoadedItem[] = [];

  constructor(reader: BufferReader) {
    this.dwTag = reader.readBytes(4).toString();
    this.dwChunkSize = reader.readUInt32();
    this.numReleasableHircItem = reader.readUInt32();

    for (let i = 0; i < this.numReleasableHircItem; i++) {
      this.listLoadedItem.push(new LoadedItem(reader));
    }
  }
}
