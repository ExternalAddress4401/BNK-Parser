import fs from "fs";
import { BufferReader } from "./BufferReader";
import { BNK } from "./lib/BNK";

const file = new BufferReader(fs.readFileSync("./music_metadata.bnk"));

const bnk = new BNK(file);
