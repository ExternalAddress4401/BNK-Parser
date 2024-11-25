import { BufferReader } from "../BufferReader";
import { UAltValues } from "./UAltValues";

export class AkBankHeader {
  dwBankGenerateVersion: number;
  dwSoundBankId: number;
  dwLanguageId: number;
  uAltValues: UAltValues;
  dwProjectId: number;
  dwSoundBankType: number;
  abyBankHash: any;

  constructor(reader: BufferReader) {
    this.dwBankGenerateVersion = reader.readUInt32();
    this.dwSoundBankId = reader.readInt32();
    this.dwLanguageId = reader.readInt32();
    this.uAltValues = new UAltValues(reader);
    this.dwProjectId = reader.readUInt32();
    this.dwSoundBankType = reader.readUInt32();
    this.abyBankHash = reader.readBytes(16);
  }
}
