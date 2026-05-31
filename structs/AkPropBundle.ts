import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AkPropBundle {
  pProps: AkPropBundleChild[] = [];

  constructor(buffer: BufferedReader) {
    const cProps = buffer.readByte();
    for (let i = 0; i < cProps; i++) {
      this.pProps.push(new AkPropBundleChild(buffer));
    }
  }

  write(buffer: BufferedWriter) {
    buffer.writeByte(this.pProps.length);
    for (const item of this.pProps) {
      item.write(buffer);
    }
  }
}

class AkPropBundleChild {
  pID: number;
  pValue: number;

  constructor(buffer: BufferedReader) {
    this.pID = buffer.readByte();
    this.pValue = buffer.readFloat();
  }

  write(buffer: BufferedWriter) {
    buffer.writeByte(this.pID);
    buffer.writeFloat(this.pValue);
  }
}
