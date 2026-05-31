import { BufferedReader } from "../BufferedReader.js";
import { BitField } from "../BitField.js";
import { AkMediaInformation } from "./AkMediaInformation.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AkBankSourceData {
  ulPluginID: BitField;
  StreamType: number;
  akMediaInformation: AkMediaInformation;

  constructor(buffer: BufferedReader) {
    this.ulPluginID = new BitField(buffer.readUInt32(), "uint32");
    this.StreamType = buffer.readByte();
    this.akMediaInformation = new AkMediaInformation(buffer);
  }

  write(buffer: BufferedWriter) {
    this.ulPluginID.write(buffer);
    buffer.writeByte(this.StreamType);
    this.akMediaInformation.write(buffer);
  }
}
