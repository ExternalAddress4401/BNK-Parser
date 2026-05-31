import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AkBankHeader {
  dwBankGeneratorVersion: number;
  dwSoundBankID: number;
  dwLanguageID: number;
  uAltValues: number;
  dwProjectID: number;
  dwSoundBankType: number;
  abyBankHash: Buffer;

  constructor(buffer: BufferedReader) {
    this.dwBankGeneratorVersion = buffer.readUInt32();
    this.dwSoundBankID = buffer.readSid();
    this.dwLanguageID = buffer.readSid();
    this.uAltValues = buffer.readUInt32();
    this.dwProjectID = buffer.readUInt32();
    this.dwSoundBankType = buffer.readUInt32();
    this.abyBankHash = buffer.readGap(16);
  }

  write(buffer: BufferedWriter) {
    buffer.writeUInt32(this.dwBankGeneratorVersion);
    buffer.writeUInt32(this.dwSoundBankID);
    buffer.writeUInt32(this.dwLanguageID);
    buffer.writeUInt32(this.uAltValues);
    buffer.writeUInt32(this.dwProjectID);
    buffer.writeUInt32(this.dwSoundBankType);
    buffer.writeGap(this.abyBankHash);
  }
}
