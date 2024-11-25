import { BufferReader } from "../BufferReader";
import { AkMediaInformation } from "./AkMediaInformation";

export class AkBankSourceData {
  ulPluginId: number;
  streamType: number;
  akMediaInformation: AkMediaInformation;

  constructor(reader: BufferReader) {
    this.ulPluginId = reader.readUInt32();
    this.streamType = reader.readByte();
    this.akMediaInformation = new AkMediaInformation(reader);
  }
}
