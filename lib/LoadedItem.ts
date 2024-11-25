import { BufferReader } from "../BufferReader";
import { CAkMusicRanSeqCntr } from "./CAkMusicRanSeqCntr";
import { CAkMusicSegment } from "./CakMusicSegment";
import { CAkMusicTrack } from "./CAkMusicTrack";

export class LoadedItem {
  cakMusicTrack: CAkMusicTrack;
  cakMusicSegment: CAkMusicSegment;
  cakMusicRanSeqCntr: CAkMusicRanSeqCntr;

  constructor(reader: BufferReader) {
    this.cakMusicTrack = new CAkMusicTrack(reader);
    this.cakMusicSegment = new CAkMusicSegment(reader);
    this.cakMusicRanSeqCntr = new CAkMusicRanSeqCntr(reader);
  }
}
