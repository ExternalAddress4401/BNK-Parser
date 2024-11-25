import { BufferReader } from "../BufferReader";

export class AkPropsBundle {
  cProps: number;
  pProps: number[] = [];

  constructor(reader: BufferReader) {
    this.cProps = reader.readByte();
  }
}
