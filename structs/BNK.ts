import type { BufferedReader } from "../BufferedReader.js";
import { BufferedWriter } from "../BufferedWriter.js";
import { BankHeader } from "./BankHeader.js";
import { HircChunk } from "./HircChunk.js";

export class BNK {
  bankHeader: BankHeader;
  hircChunk: HircChunk;

  constructor(buffer: BufferedReader) {
    this.bankHeader = new BankHeader(buffer);
    this.hircChunk = new HircChunk(buffer);
  }

  write() {
    const buffer = new BufferedWriter();
    this.bankHeader.write(buffer);
    this.hircChunk.write(buffer);

    return buffer.getUsed();
  }
}
