import { BitField } from "../BitField.js";
import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { AkPropBundle } from "./AkPropBundle.js";

export class CAkActionSetSwitch {
  eHircType: number;
  dwSectionSize: number;
  ulID: number;
  ulActionType: number;
  actionInitialValues: ActionInitialValues;

  constructor(buffer: BufferedReader) {
    this.eHircType = buffer.readByte();
    this.dwSectionSize = buffer.readUInt32();
    this.ulID = buffer.readUInt32();
    this.ulActionType = buffer.readShort();

    this.actionInitialValues = new ActionInitialValues(buffer);
  }

  write(buffer: BufferedWriter) {
    buffer.writeByte(this.eHircType);
    const sizeOffset = buffer.index;
    buffer.writeUInt32(0);
    const start = buffer.index;
    buffer.writeUInt32(this.ulID);
    buffer.writeShort(this.ulActionType);
    this.actionInitialValues.write(buffer);
    buffer.writeUInt32At(sizeOffset, buffer.index - start);
  }
}

class ActionInitialValues {
  idExt: number;
  idExt_4: BitField;
  akPropBundle: AkPropBundle;
  akPropBundle2: AkPropBundle;
  switchActionParams: SwitchActionParams;

  constructor(buffer: BufferedReader) {
    this.idExt = buffer.readUInt32();
    this.idExt_4 = new BitField(buffer.readByte(), "uint8");
    this.akPropBundle = new AkPropBundle(buffer);
    this.akPropBundle2 = new AkPropBundle(buffer);
    this.switchActionParams = new SwitchActionParams(buffer);
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    buffer.writeUInt32(this.idExt);
    this.idExt_4.write(buffer);
    this.akPropBundle.write(buffer);
    this.akPropBundle2.write(buffer);
    this.switchActionParams.write(buffer);
    return buffer.index - start;
  }
}

class SwitchActionParams {
  ulSwitchGroupID: number;
  ulSwitchStateID: number;

  constructor(buffer: BufferedReader) {
    this.ulSwitchGroupID = buffer.readUInt32();
    this.ulSwitchStateID = buffer.readUInt32();
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    buffer.writeUInt32(this.ulSwitchGroupID);
    buffer.writeUInt32(this.ulSwitchStateID);
    return buffer.index - start;
  }
}
