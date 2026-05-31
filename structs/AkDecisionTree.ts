import type { BufferedReader } from "../BufferedReader.js";
import type { BufferedWriter } from "../BufferedWriter.js";

export class AkDecisionTree {
  pNodes: (TopLevelNode | Node)[] = [];

  constructor(buffer: BufferedReader, depth: number) {
    if (depth === 0) {
      this.pNodes.push(new Node(buffer));
    } else {
      this.pNodes = readLevel(buffer, depth, 1);
    }
  }

  write(buffer: BufferedWriter) {
    if (this.pNodes[0] instanceof Node) {
      (this.pNodes[0] as Node).write(buffer);
    } else {
      writeLevel(buffer, this.pNodes);
    }
  }
}

function readLevel(
  buffer: BufferedReader,
  depth: number,
  count: number,
): (TopLevelNode | Node)[] {
  if (depth === 0) {
    const nodes: Node[] = [];
    for (let i = 0; i < count; i++) {
      nodes.push(new Node(buffer));
    }
    return nodes;
  }

  const nodes: TopLevelNode[] = [];
  for (let i = 0; i < count; i++) {
    nodes.push(new TopLevelNode(buffer));
  }

  for (const node of nodes) {
    node.pNodes = readLevel(buffer, depth - 1, node.childrenCount);
  }

  return nodes;
}

function writeLevel(buffer: BufferedWriter, nodes: (TopLevelNode | Node)[]) {
  if (nodes[0] instanceof Node) {
    for (const node of nodes) {
      (node as Node).write(buffer);
    }
    return;
  }

  for (const node of nodes) {
    (node as TopLevelNode).write(buffer);
  }

  for (const node of nodes) {
    writeLevel(buffer, (node as TopLevelNode).pNodes);
  }
}

class TopLevelNode {
  key: number;
  childrenIdx: number;
  childrenCount: number;
  uWeight: number;
  uProbability: number;
  pNodes: (TopLevelNode | Node)[] = [];

  constructor(buffer: BufferedReader) {
    this.key = buffer.readUInt32();
    this.childrenIdx = buffer.readUShort();
    this.childrenCount = buffer.readUShort();
    this.uWeight = buffer.readUShort();
    this.uProbability = buffer.readUShort();
  }

  write(buffer: BufferedWriter) {
    buffer.writeUInt32(this.key);
    buffer.writeUShort(this.childrenIdx);
    buffer.writeUShort(this.pNodes.length);
    buffer.writeUShort(this.uWeight);
    buffer.writeUShort(this.uProbability);
  }
}

class Node {
  key: number;
  audioNodeId: number;
  uWeight: number;
  uProbability: number;

  constructor(buffer: BufferedReader) {
    this.key = buffer.readUInt32();
    this.audioNodeId = buffer.readUInt32();
    this.uWeight = buffer.readUShort();
    this.uProbability = buffer.readUShort();
  }

  write(buffer: BufferedWriter) {
    buffer.writeUInt32(this.key);
    buffer.writeUInt32(this.audioNodeId);
    buffer.writeUShort(this.uWeight);
    buffer.writeUShort(this.uProbability);
  }
}
