"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Structure {
    name;
    convertTables;
    constructor(name, convertTables = []) {
        this.name = name;
        this.convertTables = convertTables;
    }
    parse(content) {
        return this.convertTables
            .map(([search, replace]) => {
            const tunedSearch = this.tuneSearch(search);
            return this.replacement(content, tunedSearch, replace);
        })
            .join("");
    }
    tuneSearch(searchValue) {
        const tunedSearch = searchValue.replaceAll("{}", "(\\w+)");
        return new RegExp(tunedSearch, "gm");
    }
    replacement(content, search, replace) {
        if (!content.match(search))
            return "";
        return content.replaceAll(search, (all, ...terms) => {
            const replacedArray = replace(this, all, ...terms);
            return this.declaration(replacedArray);
        });
    }
    declaration(props) {
        return props
            .map(([term, value]) => {
            const fullTerm = `${this.name}.${term}`;
            return `${fullTerm} = () => ${value};`;
        })
            .join("\n") + '\n';
    }
    namespace(term) {
        return this.name + '.' + term + '()';
    }
    primes = 1;
    prime(multiple) {
        this.primes++;
        let primes = [];
        for (let i = 2; primes.length < this.primes; i++) {
            if (primes.every((prime) => i % prime !== 0)) {
                primes.push(i);
            }
        }
        return (String(primes[this.primes - 1]) + (multiple ? `* ${multiple}` : ""));
    }
}
exports.default = Structure;
