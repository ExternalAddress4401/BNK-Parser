export class BufferedWriter {
  buffer: Buffer;
  index = 0;

  constructor() {
    this.buffer = Buffer.alloc(6 * 1024 * 1024);
  }
  writeByte(b: number) {
    return this.buffer.writeUInt8(b, this.index++);
  }
  writeBytes(bytes: number[]) {
    this.buffer.set(bytes, this.index);
    this.index += bytes.length;
  }
  writeString(str: string, delimited: boolean = true) {
    const bytes = Buffer.from(delimited ? str + "\0" : str, "utf8");
    this.buffer.set(bytes, this.index);
    this.index += bytes.length;
  }
  writeInt32(i: number) {
    this.buffer.writeInt32LE(i, this.index);
    this.index += 4;
  }
  writeUInt32(i: number) {
    this.buffer.writeUInt32LE(i, this.index);
    this.index += 4;
  }
  writeGap(bytes: Buffer) {
    this.buffer.set(bytes, this.index);
    this.index += bytes.length;
  }
  writeDouble(d: number) {
    this.buffer.writeDoubleLE(d, this.index);
    this.index += 8;
  }
  writeFloat(f: number) {
    this.buffer.writeFloatLE(f, this.index);
    this.index += 4;
  }
  writeShort(s: number) {
    this.buffer.writeInt16LE(s, this.index);
    this.index += 2;
  }
  writeUShort(s: number) {
    this.buffer.writeUInt16LE(s, this.index);
    this.index += 2;
  }
  getUsed() {
    return this.buffer.subarray(0, this.index);
  }
}
