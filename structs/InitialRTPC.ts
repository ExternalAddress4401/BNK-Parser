import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { RTPC } from "./RTPC.js";

export class InitialRTPC {
  pRTPCMgr: RTPC[] = [];

  constructor(buffer: BufferedReader) {
    const uNumCurves = buffer.readShort();
    for (let i = 0; i < uNumCurves; i++) {
      this.pRTPCMgr.push(new RTPC(buffer));
    }
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    buffer.writeShort(this.pRTPCMgr.length);
    for (const item of this.pRTPCMgr) {
      item.write(buffer);
    }
    return buffer.index - start;
  }
}
