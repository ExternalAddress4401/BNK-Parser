import { BufferReader } from "../BufferReader";
import { AkMeterInfo } from "./AkMeterInfo";
import { BitFlag } from "./BitFlag";
import { Children } from "./Children";
import { NodeBaseParams } from "./NodeBaseParams";

export class MusicNodeParams {
  uFlags: BitFlag;
  nodeBaseParams: NodeBaseParams;
  children: Children;
  akMeterInfo: AkMeterInfo;
  bMeterInfoFlag: number;
  numStingers: number;
  pStringers: number[] = [];

  constructor(reader: BufferReader) {
    this.uFlags = new BitFlag(reader);
    this.nodeBaseParams = new NodeBaseParams(reader);
    this.children = new Children(reader);
    this.akMeterInfo = new AkMeterInfo(reader);
    this.bMeterInfoFlag = reader.readByte();
    this.numStingers = reader.readUInt32();
  }
}
