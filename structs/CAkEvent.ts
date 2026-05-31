import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class CAkEvent {
  eHircType: number;
  dwSectionSize: number;
  ulID: number;
  eventInitialValues: EventInitialValues;

  constructor(buffer: BufferedReader) {
    this.eHircType = buffer.readByte();
    this.dwSectionSize = buffer.readUInt32();
    this.ulID = buffer.readUInt32();
    this.eventInitialValues = new EventInitialValues(buffer);
  }

  write(buffer: BufferedWriter) {
    buffer.writeByte(this.eHircType);
    buffer.writeUInt32(this.dwSectionSize);
    buffer.writeUInt32(this.ulID);

    this.eventInitialValues.write(buffer);
  }
}

class EventInitialValues {
  actions: Action[] = [];

  constructor(buffer: BufferedReader) {
    const ulActionListSize = buffer.readByte();
    for (let i = 0; i < ulActionListSize; i++) {
      this.actions.push(new Action(buffer));
    }
  }

  write(buffer: BufferedWriter) {
    buffer.writeByte(this.actions.length);
    for (const item of this.actions) {
      item.write(buffer);
    }
  }
}

class Action {
  ulActionId: number;

  constructor(buffer: BufferedReader) {
    this.ulActionId = buffer.readUInt32();
  }

  write(buffer: BufferedWriter) {
    buffer.writeUInt32(this.ulActionId);
  }
}
