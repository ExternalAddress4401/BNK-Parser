import fs from "fs";
import { BufferedReader } from "./BufferedReader.js";
import { BNK } from "./structs/BNK.js";

const bytes = fs.readFileSync("./music_metadata.bnk");

const reader = new BufferedReader(bytes);

const bnk = new BNK(reader);

const end = bnk.write();
fs.writeFileSync("./test", end);
