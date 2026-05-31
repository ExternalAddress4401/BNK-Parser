import { BitField } from "../BitField.js";
import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { AkMeterInfo } from "./AkMeterInfo.js";
import { Children } from "./Children.js";
import { NodeBaseParams } from "./NodeBaseParams.js";

export class MusicNodeParams {
  uFlags: BitField;
  nodeBaseParams: NodeBaseParams;
  Children: Children;
  akMeterInfo: AkMeterInfo;
  bMeterInfoFlag: number;
  pStingers: any[] = [];

  constructor(buffer: BufferedReader) {
    this.uFlags = new BitField(buffer.readByte(), "uint8");
    this.nodeBaseParams = new NodeBaseParams(buffer);
    this.Children = new Children(buffer);
    this.akMeterInfo = new AkMeterInfo(buffer);
    this.bMeterInfoFlag = buffer.readByte();

    const NumStingers = buffer.readUInt32();
  }

  write(buffer: BufferedWriter) {
    this.uFlags.write(buffer);
    this.nodeBaseParams.write(buffer);
    this.Children.write(buffer);
    this.akMeterInfo.write(buffer);
    buffer.writeByte(this.bMeterInfoFlag);
    buffer.writeUInt32(this.pStingers.length);

    // stingers are unused
  }
}
