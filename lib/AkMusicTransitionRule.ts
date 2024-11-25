import { BufferReader } from "../BufferReader";
import { AkMusicTransDstRule } from "./AkMusicTransDstRule";
import { AkMusicTransSrcRule } from "./AkMusicTransSrcRule";

export class AkMusicTransitionRule {
  uNumSrc: number;
  srcId: number;
  uNumDst: number;
  dstId: number;
  akMusicTransSrcRule: AkMusicTransSrcRule;
  akMusicTransDstRule: AkMusicTransDstRule;

  constructor(reader: BufferReader) {
    this.uNumSrc = reader.readUInt32();
    this.srcId = reader.readInt32();
    this.uNumDst = reader.readUInt32();
    this.dstId = reader.readInt32();
    this.akMusicTransSrcRule = new AkMusicTransSrcRule(reader);
    this.akMusicTransDstRule = new AkMusicTransDstRule(reader);
  }
}
