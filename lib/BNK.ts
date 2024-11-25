import { BufferReader } from "../BufferReader";
import { BankHeader } from "./BankHeader";
import { HircChunk } from "./HircChunk";

export class BNK {
  bankHeader: BankHeader;
  hircChunk: HircChunk;

  constructor(reader: BufferReader) {
    this.bankHeader = new BankHeader(reader);
    this.hircChunk = new HircChunk(reader);
  }
}
