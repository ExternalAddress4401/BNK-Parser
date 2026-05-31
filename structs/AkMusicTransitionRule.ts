import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { AkMusicTransDstRule } from "./AkMusicTransDstRule.js";
import { AkMusicTransitionObject } from "./AkMusicTransitionObject.js";
import { AkMusicTransSrcRule } from "./AkMusicTransSrcRule.js";

export class AkMusicTransitionRule {
  srcID: number;
  dstID: number;
  akMusicTransSrcRules: AkMusicTransSrcRule[] = [];
  akMusicTransDstRules: AkMusicTransDstRule[] = [];
  AllocTransObjectFlag: number;
  AkMusicTransitionObject: AkMusicTransitionObject | undefined;

  constructor(buffer: BufferedReader) {
    const uNumSrc = buffer.readUInt32();
    this.srcID = buffer.readInt32();
    const uNumDst = buffer.readUInt32();
    this.dstID = buffer.readInt32();

    for (let i = 0; i < uNumSrc; i++) {
      this.akMusicTransSrcRules.push(new AkMusicTransSrcRule(buffer));
    }
    for (let i = 0; i < uNumDst; i++) {
      this.akMusicTransDstRules.push(new AkMusicTransDstRule(buffer));
    }

    this.AllocTransObjectFlag = buffer.readByte();

    if (this.AllocTransObjectFlag) {
      this.AkMusicTransitionObject = new AkMusicTransitionObject(buffer);
    }
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    buffer.writeUInt32(this.akMusicTransSrcRules.length);
    buffer.writeInt32(this.srcID);
    buffer.writeUInt32(this.akMusicTransDstRules.length);
    buffer.writeInt32(this.dstID);
    for (const item of this.akMusicTransSrcRules) {
      item.write(buffer);
    }
    for (const item of this.akMusicTransDstRules) {
      item.write(buffer);
    }
    buffer.writeByte(this.AllocTransObjectFlag);
    if (this.AllocTransObjectFlag) {
      this.AkMusicTransitionObject?.write(buffer);
    }
    return buffer.index - start;
  }
}
