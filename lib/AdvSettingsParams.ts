import { BufferReader } from "../BufferReader";

export class AdvSettingsParams {
  byBitVector: number;
  eVirtualQueueBehavior: number;
  u16MaxNumInstance: number;
  eBelowThresholdBehavior: number;
  byBitVector2: number;

  constructor(reader: BufferReader) {
    this.byBitVector = reader.readByte();
    this.eVirtualQueueBehavior = reader.readByte();
    this.u16MaxNumInstance = reader.readUShort();
    this.eBelowThresholdBehavior = reader.readByte();
    this.byBitVector2 = reader.readByte();
  }
}
