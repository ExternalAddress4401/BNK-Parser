import { BufferReader } from "../BufferReader";
import { AkMusicMarkerWwise } from "./AkMusicMarkerWwise";
import { MusicNodeParams } from "./MusicNodeParams";

export class MusicSegmentInitialValues {
  musicNodeParams: MusicNodeParams;
  fDuration: number;
  ulNumMarkers: number;
  pArrayMarkers: AkMusicMarkerWwise[] = [];

  constructor(reader: BufferReader) {
    this.musicNodeParams = new MusicNodeParams(reader);
    this.fDuration = reader.readDouble();
    this.ulNumMarkers = reader.readUInt32();

    for (let i = 0; i < this.ulNumMarkers; i++) {
      this.pArrayMarkers.push(new AkMusicMarkerWwise(reader));
    }
  }
}
