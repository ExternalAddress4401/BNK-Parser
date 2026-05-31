import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { CAkActionSetSwitch } from "./CAkActionSetSwitch.js";
import { CAkEvent } from "./CAkEvent.js";
import { CAkMusicRanSeqCntr } from "./CAkMusicRanSeqCntr.js";
import { CAkMusicSegment } from "./CAkMusicSegment.js";
import { CAkMusicSwitchCntr } from "./CAkMusicSwitchCntr.js";
import { CAkMusicTrack } from "./CAkMusicTrack.js";

type LoadedItem =
  | CAkActionSetSwitch
  | CAkEvent
  | CAkMusicSegment
  | CAkMusicTrack
  | CAkMusicSwitchCntr
  | CAkMusicRanSeqCntr;

export class HircChunk {
  dwTag: string;
  dwChunkSize: number;
  listLoadedItem: LoadedItem[] = [];

  constructor(buffer: BufferedReader) {
    this.dwTag = buffer.readString(4);
    this.dwChunkSize = buffer.readUInt32();
    const numReleasableHircItem = buffer.readUInt32();

    for (let i = 0; i < numReleasableHircItem; i++) {
      const byte = buffer.peekByte();
      switch (byte) {
        case 3:
          this.listLoadedItem.push(new CAkActionSetSwitch(buffer));
          break;
        case 4:
          this.listLoadedItem.push(new CAkEvent(buffer));
          break;
        case 10:
          this.listLoadedItem.push(new CAkMusicSegment(buffer));
          break;
        case 11:
          this.listLoadedItem.push(new CAkMusicTrack(buffer));
          break;
        case 12:
          this.listLoadedItem.push(new CAkMusicSwitchCntr(buffer));
          break;
        case 13:
          this.listLoadedItem.push(new CAkMusicRanSeqCntr(buffer));
          break;
        default:
          console.log(`Missing key: ${byte}`);
          break;
      }
    }
  }

  write(buffer: BufferedWriter) {
    buffer.writeString(this.dwTag, false);
    buffer.writeUInt32(this.dwChunkSize);
    buffer.writeUInt32(this.listLoadedItem.length);
    for (const item of this.listLoadedItem) {
      item.write(buffer);
    }
  }
}
