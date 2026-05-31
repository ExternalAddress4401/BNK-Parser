import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { AkMusicMarkerWwise } from "./AkMusicMarkerWwise.js";
import { MusicNodeParams } from "./MusicNodeParams.js";

export class MusicSegmentInitialValues {
  musicNodeParams: MusicNodeParams;
  fDuration: number;
  pArrayMarkers: AkMusicMarkerWwise[] = [];

  constructor(buffer: BufferedReader) {
    this.musicNodeParams = new MusicNodeParams(buffer);
    this.fDuration = buffer.readDouble();

    const ulNumMarkers = buffer.readUInt32();
    for (var i = 0; i < ulNumMarkers; i++) {
      this.pArrayMarkers.push(new AkMusicMarkerWwise(buffer));
    }
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    this.musicNodeParams.write(buffer);
    buffer.writeDouble(this.fDuration);
    buffer.writeUInt32(this.pArrayMarkers.length);
    for (const item of this.pArrayMarkers) {
      item.write(buffer);
    }
    return buffer.index - start;
  }
}
