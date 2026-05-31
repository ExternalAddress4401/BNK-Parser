import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AkMusicRanSeqPlaylistItem {
  SegmentID: number;
  playlistItemID: number;
  eRSType: number;
  Loop: number;
  LoopMin: number;
  LoopMax: number;
  Weight: number;
  wAvoidRepeatCount: number;
  bIsUsingWeight: number;
  bIsShuffle: number;
  pPlayList: AkMusicRanSeqPlaylistItem[] = [];

  constructor(buffer: BufferedReader) {
    this.SegmentID = buffer.readTid();
    this.playlistItemID = buffer.readSid();
    const NumChildren = buffer.readUInt32();
    this.eRSType = buffer.readInt32();
    this.Loop = buffer.readShort();
    this.LoopMin = buffer.readShort();
    this.LoopMax = buffer.readShort();
    this.Weight = buffer.readUInt32();
    this.wAvoidRepeatCount = buffer.readUShort();
    this.bIsUsingWeight = buffer.readByte();
    this.bIsShuffle = buffer.readByte();

    for (let i = 0; i < NumChildren; i++) {
      this.pPlayList.push(new AkMusicRanSeqPlaylistItem(buffer));
    }
  }

  write(buffer: BufferedWriter) {
    buffer.writeUInt32(this.SegmentID);
    buffer.writeUInt32(this.playlistItemID);
    buffer.writeUInt32(this.pPlayList.length);
    buffer.writeInt32(this.eRSType);
    buffer.writeShort(this.Loop);
    buffer.writeShort(this.LoopMin);
    buffer.writeShort(this.LoopMax);
    buffer.writeUInt32(this.Weight);
    buffer.writeUShort(this.wAvoidRepeatCount);
    buffer.writeByte(this.bIsUsingWeight);
    buffer.writeByte(this.bIsShuffle);

    for (const item of this.pPlayList) {
      item.write(buffer);
    }
  }

  countChildren() {
    let count = 1;
    for (const item of this.pPlayList) {
      count += item.countChildren();
    }
    return count;
  }
}
