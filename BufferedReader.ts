export class BufferedReader {
  buffer: Buffer;
  index = 0;

  constructor(buffer: Buffer) {
    this.buffer = buffer;
  }
  peekByte() {
    return this.buffer.readUInt8(this.index);
  }
  readByte() {
    return this.buffer.readUInt8(this.index++);
  }
  readBytes(count: number) {
    const bytes = this.buffer.subarray(this.index, this.index + count);
    this.index += count;
    return bytes;
  }
  readString(size?: number) {
    if (size) {
      return this.readBytes(size).toString();
    } else {
      let bytes: number[] = [];
      while (true) {
        const b = this.readByte();
        if (b === 0) {
          return Buffer.from(bytes).toString("utf8");
        }
        bytes.push(b);
      }
    }
  }
  readInt32() {
    const number = this.buffer.readInt32LE(this.index);
    this.index += 4;
    return number;
  }
  readUInt32() {
    const number = this.buffer.readUInt32LE(this.index);
    this.index += 4;
    return number;
  }
  readTid() {
    return this.readUInt32();
  }
  readSid() {
    return this.readUInt32();
  }
  readGap(size: number) {
    return this.readBytes(size);
  }
  readDouble() {
    const d = this.buffer.readDoubleLE(this.index);
    this.index += 8;
    return d;
  }
  readFloat() {
    const f = this.buffer.readFloatLE(this.index);
    this.index += 4;
    return f;
  }
  readShort() {
    const s = this.buffer.readInt16LE(this.index);
    this.index += 2;
    return s;
  }
  readUShort() {
    const s = this.buffer.readUInt16LE(this.index);
    this.index += 2;
    return s;
  }
}
