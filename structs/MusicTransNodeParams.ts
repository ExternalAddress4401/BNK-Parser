import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { AkMusicTransitionRule } from "./AkMusicTransitionRule.js";
import { MusicNodeParams } from "./MusicNodeParams.js";

export class MusicTransNodeParams {
  musicNodeParams: MusicNodeParams;
  pRules: AkMusicTransitionRule[] = [];

  constructor(buffer: BufferedReader) {
    this.musicNodeParams = new MusicNodeParams(buffer);

    const numRules = buffer.readUInt32();
    for (let i = 0; i < numRules; i++) {
      this.pRules.push(new AkMusicTransitionRule(buffer));
    }
  }

  write(buffer: BufferedWriter) {
    this.musicNodeParams.write(buffer);
    buffer.writeUInt32(this.pRules.length);

    for (const item of this.pRules) {
      item.write(buffer);
    }
  }
}
