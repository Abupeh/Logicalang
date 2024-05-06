"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const structure_1 = __importDefault(require("./structure"));
const inject_1 = __importDefault(require("./inject"));
const Logic_1 = require("./Logic");
const Logic = new structure_1.default("Logic", Logic_1.LogicStructure);
const content = (0, fs_1.readFileSync)("test/person.ll", "utf8");
const injected = (0, inject_1.default)(content, Logic);
const joined = injected.join("");
(0, fs_1.writeFileSync)("test/person.js", joined, "utf8");
