import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AkMusicTransitionObject {
  segmentID: number;
  fadeInParams: FadeParams;
  fadeOutParams: FadeParams;
  bPlayPreEntry: number;
  bPlayPostExit: number;

  constructor(buffer: BufferedReader) {
    this.segmentID = buffer.readUInt32();
    this.fadeInParams = new FadeParams(buffer);
    this.fadeOutParams = new FadeParams(buffer);
    this.bPlayPreEntry = buffer.readByte();
    this.bPlayPostExit = buffer.readByte();
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    buffer.writeUInt32(this.segmentID);
    this.fadeInParams.write(buffer);
    this.fadeOutParams.write(buffer);
    buffer.writeByte(this.bPlayPreEntry);
    buffer.writeByte(this.bPlayPostExit);
    return buffer.index - start;
  }
}

class FadeParams {
  transitionTime: number;
  eFadeCurve: number;
  iFadeOffset: number;

  constructor(buffer: BufferedReader) {
    this.transitionTime = buffer.readInt32();
    this.eFadeCurve = buffer.readUInt32();
    this.iFadeOffset = buffer.readInt32();
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    buffer.writeInt32(this.transitionTime);
    buffer.writeUInt32(this.eFadeCurve);
    buffer.writeInt32(this.iFadeOffset);
    return buffer.index - start;
  }
}
