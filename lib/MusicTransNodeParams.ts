import { BufferReader } from "../BufferReader";
import { AkMusicTransitionRule } from "./AkMusicTransitionRule";
import { MusicNodeParams } from "./MusicNodeParams";

export class MusicTransNodeParams {
  musicNodeParams: MusicNodeParams;
  numRules: number;
  pRules: AkMusicTransitionRule[] = [];
  allocTransObjectFlag: number;

  constructor(reader: BufferReader) {
    this.musicNodeParams = new MusicNodeParams(reader);
    this.numRules = reader.readUInt32();

    for (let i = 0; i < this.numRules; i++) {
      this.pRules.push(new AkMusicTransitionRule(reader));
    }

    this.allocTransObjectFlag = reader.readByte();
  }
}
