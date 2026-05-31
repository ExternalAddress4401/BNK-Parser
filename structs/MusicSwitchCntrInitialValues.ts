import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { AkDecisionTree } from "./AkDecisionTree.js";
import { Arguments } from "./Arguments.js";
import { MusicTransNodeParams } from "./MusicTransNodeParams.js";

export class MusicSwitchCntrInitialValues {
  musicTransNodeParams: MusicTransNodeParams;
  bIsContinuePlayback: number;
  uTreeDepth: number;
  Arguments: Arguments;
  akDecisionTree: AkDecisionTree;

  constructor(buffer: BufferedReader) {
    this.musicTransNodeParams = new MusicTransNodeParams(buffer);
    this.bIsContinuePlayback = buffer.readByte();
    this.uTreeDepth = buffer.readUInt32();

    this.Arguments = new Arguments(buffer, this.uTreeDepth);
    this.akDecisionTree = new AkDecisionTree(buffer, this.uTreeDepth);
  }

  write(buffer: BufferedWriter) {
    this.musicTransNodeParams.write(buffer);

    buffer.writeByte(this.bIsContinuePlayback);
    buffer.writeUInt32(this.uTreeDepth);

    this.Arguments.write(buffer);
    this.akDecisionTree.write(buffer);
  }
}
