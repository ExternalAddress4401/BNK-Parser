import { BitField } from "../BitField.js";
import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AdvSettingsParams {
  byBitVector: BitField;
  eVirtualQueueBehavior: number;
  u16MaxNumInstance: number;
  eBelowThresholdBehavior: number;
  byBitVector2: BitField;

  constructor(buffer: BufferedReader) {
    this.byBitVector = new BitField(buffer.readByte(), "uint8");
    this.eVirtualQueueBehavior = buffer.readByte();
    this.u16MaxNumInstance = buffer.readShort();
    this.eBelowThresholdBehavior = buffer.readByte();
    this.byBitVector2 = new BitField(buffer.readByte(), "uint8");
  }

  write(buffer: BufferedWriter) {
    this.byBitVector.write(buffer);
    buffer.writeByte(this.eVirtualQueueBehavior);
    buffer.writeShort(this.u16MaxNumInstance);
    buffer.writeByte(this.eBelowThresholdBehavior);
    this.byBitVector2.write(buffer);
  }
}
