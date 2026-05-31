import { BitField } from "../BitField.js";
import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { AkBankSourceData } from "./AkBankSourceData.js";
import { AkClipAutomation } from "./AkClipAutomation.js";
import { AkTrackSrcInfo } from "./AkTrackSrcInfo.js";
import { NodeBaseParams } from "./NodeBaseParams.js";

export class MusicTrackInitialValues {
  uFlags: BitField;
  pSource: AkBankSourceData[] = [];
  pPlaylist: AkTrackSrcInfo[] = [];
  numSubtrack: number | undefined;
  pItems: AkClipAutomation[] = [];
  nodeBaseParams: NodeBaseParams;
  eTrackType: number;
  iLookAheadTime: number;

  constructor(buffer: BufferedReader) {
    this.uFlags = new BitField(buffer.readByte(), "uint8");

    const numSources = buffer.readUInt32();
    for (var i = 0; i < numSources; i++) {
      this.pSource.push(new AkBankSourceData(buffer));
    }

    const numPlaylistItem = buffer.readUInt32();
    for (var i = 0; i < numPlaylistItem; i++) {
      this.pPlaylist.push(new AkTrackSrcInfo(buffer));
    }

    if (numPlaylistItem !== 0) {
      this.numSubtrack = buffer.readUInt32();
    }

    const numClipAutomationItem = buffer.readUInt32();

    for (var i = 0; i < numClipAutomationItem; i++) {
      this.pItems.push(new AkClipAutomation(buffer));
    }

    this.nodeBaseParams = new NodeBaseParams(buffer);
    this.eTrackType = buffer.readByte();
    this.iLookAheadTime = buffer.readUInt32();
  }

  write(buffer: BufferedWriter) {
    this.uFlags.write(buffer);
    buffer.writeUInt32(this.pSource.length);
    for (const item of this.pSource) {
      item.write(buffer);
    }

    buffer.writeUInt32(this.pPlaylist.length);
    for (const item of this.pPlaylist) {
      item.write(buffer);
    }

    if (this.numSubtrack) {
      buffer.writeUInt32(this.numSubtrack);
    }

    buffer.writeUInt32(this.pItems.length);
    for (const item of this.pItems) {
      item.write(buffer);
    }

    this.nodeBaseParams.write(buffer);
    buffer.writeByte(this.eTrackType);
    buffer.writeUInt32(this.iLookAheadTime);
  }
}
