"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogicStructure = void 0;
exports.LogicStructure = [
    [
        "All {} (is|are) {}",
        (structure, all, S, C, P) => {
            return [
                [S, structure.prime()],
                [P, structure.prime(structure.namespace(S))],
            ];
        },
    ],
    [
        "No {} (is|are) {}",
        (structure, all, S, C, P) => {
            return [
                [S, structure.prime()],
            ];
        },
    ],
    [
        "Some {} (is|are) {}",
        (structure, all, S, C, P) => {
            return [
                [S, structure.prime()],
                [P, structure.prime("-" + structure.namespace(S))],
            ];
        },
    ],
];
