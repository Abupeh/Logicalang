"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Inject(content, structure) {
    const lines = content.split(/\;\n|\;|\n/);
    const injectedLines = lines.map((line) => structure.parse(line));
    injectedLines.unshift(boilerPlate(structure));
    injectedLines.push(endPlate(structure));
    return injectedLines;
}
exports.default = Inject;
function boilerPlate(structure) {
    return `${structure.name} = {};\n`;
}
function endPlate(structure) {
    return `for(const s in ${structure.name}){
	console.log(s, ${structure.name}[s]());
}`;
}
