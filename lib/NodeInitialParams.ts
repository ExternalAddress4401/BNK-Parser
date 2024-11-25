import { BufferReader } from "../BufferReader";
import { AkPropsBundle } from "./AkPropsBundle";

export class NodeInitialParams {
  akPropValue: AkPropsBundle;
  rangedModifiers: AkPropsBundle;

  constructor(reader: BufferReader) {
    this.akPropValue = new AkPropsBundle(reader);
    this.rangedModifiers = new AkPropsBundle(reader);
  }
}
