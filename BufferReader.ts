export class BufferReader {
  #buffer: Buffer;
  #index: number = 0;

  constructor(buffer: Buffer) {
    this.#buffer = buffer;
  }
  readBytes(count: number) {
    const bytes = this.#buffer.subarray(this.#index, this.#index + count);
    this.#index += count;
    return bytes;
  }
  readByte() {
    return this.#buffer.readUInt8(this.#index++);
  }
  readUShort() {
    const short = this.#buffer.readUInt16LE(this.#index);
    this.#index += 2;
    return short;
  }
  readInt32() {
    const uint = this.#buffer.readInt32LE(this.#index);
    this.#index += 4;
    return uint;
  }
  readUInt32() {
    const uint = this.#buffer.readUInt32LE(this.#index);
    this.#index += 4;
    return uint;
  }
  readFloat() {
    const float = this.#buffer.readFloatLE(this.#index);
    this.#index += 4;
    return float;
  }
  readDouble() {
    const double = this.#buffer.readDoubleLE(this.#index);
    this.#index += 8;
    return double;
  }
}
