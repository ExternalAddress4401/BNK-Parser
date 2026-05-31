import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { AkMusicRanSeqPlaylistItem } from "./AkMusicRanSeqPlaylistItem.js";
import { MusicTransNodeParams } from "./MusicTransNodeParams.js";

export class MusicRanSeqCntrInitialValues {
  musicTransNodeParams: MusicTransNodeParams;
  pPlayList: AkMusicRanSeqPlaylistItem;

  constructor(buffer: BufferedReader) {
    this.musicTransNodeParams = new MusicTransNodeParams(buffer);

    const numPlaylistItems = buffer.readUInt32();
    this.pPlayList = new AkMusicRanSeqPlaylistItem(buffer);
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    this.musicTransNodeParams.write(buffer);
    buffer.writeUInt32(this.pPlayList.countChildren());
    this.pPlayList.write(buffer);
    return buffer.index - start;
  }
}
