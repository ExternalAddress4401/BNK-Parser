import { BufferReader } from "../BufferReader";
import { AkBankHeader } from "./AkBankHeader";

export class BankHeader {
  dwTag: string;
  dwChunkSize: number;
  akBankHeader: AkBankHeader;

  constructor(reader: BufferReader) {
    this.dwTag = reader.readBytes(4).toString();
    this.dwChunkSize = reader.readUInt32();

    this.akBankHeader = new AkBankHeader(reader);
  }
}
