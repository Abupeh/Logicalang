import { readFileSync, writeFileSync } from "fs";
import Structure, { Logic } from "./structure";
import Inject from "./inject";

const content = readFileSync("test/person.ll", "utf8");
const injected = Inject(content, Logic);
const joined = injected.join('\n');
writeFileSync("test/person.js", joined, 'utf8')