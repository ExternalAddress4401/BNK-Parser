import type { BufferedWriter } from "./BufferedWriter.js";

type FieldType = "uint8" | "uint32";

export class BitField {
  value: number;
  type: FieldType;

  constructor(number: number, type: FieldType) {
    this.value = number;
    this.type = type;
  }

  write(buffer: BufferedWriter) {
    switch (this.type) {
      case "uint8":
        buffer.writeByte(this.value);
        break;
      case "uint32":
        buffer.writeUInt32(this.value);
        break;
    }
  }
}
