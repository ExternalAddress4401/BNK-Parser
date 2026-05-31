import { BitField } from "../BitField.js";
import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";
import { AdvSettingsParams } from "./AdvSettingsParams.js";
import { AuxParams } from "./AuxParams.js";
import { InitialRTPC } from "./InitialRTPC.js";
import { NodeInitialFxParams } from "./NodeInitialFxParams.js";
import { NodeInitialParams } from "./NodeInitialParams.js";
import { PositioningParams } from "./PositioningParams.js";
import { StateChunk } from "./StateChunk.js";

export class NodeBaseParams {
  nodeInitialFxParams: NodeInitialFxParams;
  bIsOverrideParentMetadata: number;
  uNumFx: number;
  bOverrideAttachmentParams: number;
  OverrideBusId: number;
  DirectParentID: number;
  byBitVector: BitField;
  nodeInitialParams: NodeInitialParams;
  positioningParams: PositioningParams;
  auxParams: AuxParams;
  advSettingsParams: AdvSettingsParams;
  stateChunk: StateChunk;
  initialRTPC: InitialRTPC;

  constructor(buffer: BufferedReader) {
    this.nodeInitialFxParams = new NodeInitialFxParams(buffer);
    this.bIsOverrideParentMetadata = buffer.readByte();
    this.uNumFx = buffer.readByte();
    this.bOverrideAttachmentParams = buffer.readByte();
    this.OverrideBusId = buffer.readUInt32();
    this.DirectParentID = buffer.readUInt32();
    this.byBitVector = new BitField(buffer.readByte(), "uint8");
    this.nodeInitialParams = new NodeInitialParams(buffer);
    this.positioningParams = new PositioningParams(buffer);
    this.auxParams = new AuxParams(buffer);
    this.advSettingsParams = new AdvSettingsParams(buffer);
    this.stateChunk = new StateChunk(buffer);
    this.initialRTPC = new InitialRTPC(buffer);
  }

  write(buffer: BufferedWriter) {
    const start = buffer.index;
    this.nodeInitialFxParams.write(buffer);
    buffer.writeByte(this.bIsOverrideParentMetadata);
    buffer.writeByte(this.uNumFx);
    buffer.writeByte(this.bOverrideAttachmentParams);
    buffer.writeUInt32(this.OverrideBusId);
    buffer.writeUInt32(this.DirectParentID);
    this.byBitVector.write(buffer);
    this.nodeInitialParams.write(buffer);
    this.positioningParams.write(buffer);
    this.auxParams.write(buffer);
    this.advSettingsParams.write(buffer);
    this.stateChunk.write(buffer);
    this.initialRTPC.write(buffer);
    return buffer.index - start;
  }
}
