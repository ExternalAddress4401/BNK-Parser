import { BufferReader } from "../BufferReader";
import { MusicTransNodeParams } from "./MusicTransNodeParams";

export class MusicRanSeqCntrInitialValues {
  musicTransNodeParams: MusicTransNodeParams;

  constructor(reader: BufferReader) {
    this.musicTransNodeParams = new MusicTransNodeParams(reader);
  }
}
