export default class Structure {
	constructor(public convertTables: ConvertTable[] = []) {}
	parse(content: string) {
		let parsed = content;
		this.convertTables.map(([searchValue, replaceValue]) => {
			parsed = parsed.replaceAll(searchValue, replaceValue);
		});
		return parsed;
	}
	static rPrimes = 1;
	static rPrime() {
		Structure.rPrimes++;
		let primes: number[] = [];
		for(let i = 2; primes.length < Structure.rPrimes; i++) {
			if(primes.every(prime => i % prime !== 0)) {
				primes.push(i);
			}
		}
		return primes[Structure.rPrimes - 1];
	}
}
type searchValue = RegExp;
type replaceValue = (all: string, S: string, P: string) => string;
type ConvertTable = [searchValue, replaceValue];
export const Logic = new Structure([[/All (\w+) is (\w+)/gm, (all, S, P) => `
const ${S} = ${Structure.rPrime()};
const ${P} = ${Structure.rPrime()} * ${S};
`]]);
