import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { AkPropBundle } from "./AkPropBundle.js";

export class NodeInitialParams {
  akPropBundle1: AkPropBundle;
  akPropBundle2: AkPropBundle;

  constructor(buffer: BufferedReader) {
    this.akPropBundle1 = new AkPropBundle(buffer);
    this.akPropBundle2 = new AkPropBundle(buffer);
  }

  write(buffer: BufferedWriter) {
    this.akPropBundle1.write(buffer);
    this.akPropBundle2.write(buffer);
  }
}
