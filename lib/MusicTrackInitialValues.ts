import { BufferReader } from "../BufferReader";
import { AkBankSourceData } from "./AkBankSourceData";
import { AkClipAutomation } from "./AkClipAutomation";
import { AkMeterInfo } from "./AkMeterInfo";
import { AkTrackSrcInfo } from "./AkTrackSrcInfo";
import { Children } from "./Children";
import { NodeBaseParams } from "./NodeBaseParams";
import { NodeInitialParams } from "./NodeInitialParams";

export class MusicTrackInitialValues {
  uFlags: number;
  numSources: number;
  akBankSourceData: AkBankSourceData;
  numPlaylistItem: number;
  akTracksSrcInfo: AkTrackSrcInfo[] = [];
  numSubTrack: number;
  numClipAutomationItem: number;
  akClipAutomation: AkClipAutomation[] = [];
  nodeBaseParams: NodeBaseParams;
  eTrackType: number;
  iLookAheadTime: number;

  constructor(reader: BufferReader) {
    this.uFlags = reader.readByte();
    this.numSources = reader.readUInt32();
    this.akBankSourceData = new AkBankSourceData(reader);
    this.numPlaylistItem = reader.readUInt32();

    for (let i = 0; i < this.numPlaylistItem; i++) {
      this.akTracksSrcInfo.push(new AkTrackSrcInfo(reader));
    }

    this.numSubTrack = reader.readUInt32();
    this.numClipAutomationItem = reader.readUInt32();

    for (let i = 0; i < this.numClipAutomationItem; i++) {
      this.akClipAutomation.push(new AkClipAutomation(reader));
    }

    this.nodeBaseParams = new NodeBaseParams(reader);

    this.eTrackType = reader.readByte();
    this.iLookAheadTime = reader.readInt32();
  }
}
