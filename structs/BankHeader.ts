import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { AkBankHeader } from "./AkBankHeader.js";

export class BankHeader {
  dwTag: string;
  dwChunkSize: number;
  akBankHeader: AkBankHeader;

  constructor(buffer: BufferedReader) {
    this.dwTag = buffer.readString(4);
    this.dwChunkSize = buffer.readUInt32();
    this.akBankHeader = new AkBankHeader(buffer);
    return this;
  }

  write(buffer: BufferedWriter) {
    buffer.writeString(this.dwTag, false);
    const sizeOffset = buffer.index;
    buffer.writeUInt32(0);
    const bytesWritten = this.akBankHeader.write(buffer);
    buffer.writeUInt32At(sizeOffset, bytesWritten);
  }
}
