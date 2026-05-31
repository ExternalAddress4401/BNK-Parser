import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { AkRTPCGraphPoint } from "./AkRTPCGraphPoint.js";

export class RTPC {
  RTPCID: number;
  rtpcType: number;
  rtpcAccum: number;
  ParamID: number;
  rtpcCurveID: number;
  eScaling: number;
  pRTPCMgr: AkRTPCGraphPoint[] = [];

  constructor(buffer: BufferedReader) {
    this.RTPCID = buffer.readTid();
    this.rtpcType = buffer.readByte();
    this.rtpcAccum = buffer.readByte();
    this.ParamID = buffer.readByte();
    this.rtpcCurveID = buffer.readSid();
    this.eScaling = buffer.readByte();

    const ulSize = buffer.readShort();
    for (let i = 0; i < ulSize; i++) {
      this.pRTPCMgr.push(new AkRTPCGraphPoint(buffer));
    }
  }

  write(buffer: BufferedWriter) {
    buffer.writeUInt32(this.RTPCID);
    buffer.writeByte(this.rtpcType);
    buffer.writeByte(this.rtpcAccum);
    buffer.writeByte(this.ParamID);
    buffer.writeUInt32(this.rtpcCurveID);
    buffer.writeByte(this.eScaling);

    buffer.writeShort(this.pRTPCMgr.length);
    for (const item of this.pRTPCMgr) {
      item.write(buffer);
    }
  }
}
