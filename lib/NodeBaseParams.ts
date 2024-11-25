import { BufferReader } from "../BufferReader";
import { AdvSettingsParams } from "./AdvSettingsParams";
import { AuxParams } from "./AuxParams";
import { ByBitVector } from "./ByBitVector";
import { InitialRtpc } from "./InitialRtpc";
import { NodeInitialFxParams } from "./NodeInitialFxParams";
import { NodeInitialParams } from "./NodeInitialParams";
import { PositioningParams } from "./PositioningParams";
import { StateChunk } from "./StateChunk";

export class NodeBaseParams {
  nodeInitialFxParams: NodeInitialFxParams;
  bIsOVerrideParentMetadata: number;
  uNumFx: number;
  bOverrideAttachmentParams: number;
  overrideBusId: number;
  directParentId: number;
  byBitVector: ByBitVector;
  nodeInitialParams: NodeInitialParams;
  positioningParams: PositioningParams;
  auxParams: AuxParams;
  advSettingsParams: AdvSettingsParams;
  stateChunk: StateChunk;
  initialRtpc: InitialRtpc;

  constructor(reader: BufferReader) {
    this.nodeInitialFxParams = new NodeInitialFxParams(reader);
    this.bIsOVerrideParentMetadata = reader.readByte();
    this.uNumFx = reader.readByte();
    this.bOverrideAttachmentParams = reader.readByte();
    this.overrideBusId = reader.readInt32();
    this.directParentId = reader.readInt32();
    this.byBitVector = new ByBitVector(reader);
    this.nodeInitialParams = new NodeInitialParams(reader);
    this.positioningParams = new PositioningParams(reader);
    this.auxParams = new AuxParams(reader);
    this.advSettingsParams = new AdvSettingsParams(reader);
    this.stateChunk = new StateChunk(reader);
    this.initialRtpc = new InitialRtpc(reader);
  }
}
