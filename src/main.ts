import { readFileSync, writeFileSync } from "fs";

const native = "";
function main(reverse = false) {
	const content = readFileSync(
		reverse ? "test/reverse.js" : "test/reverse.yap",
		"utf8"
	);
	const parsedContent = parseContent(
		native + content,
		Object.entries(Keywords),
		BaseKeywords,
		reverse
	);
	writeFileSync(reverse ? "test/reverse.yap" : "test/main.js", parsedContent);
}
function parseContent(
	content: string,
	keywords: [string, string][],
	base: string,
	reverse = false
) {
	keywords.map(([keyword, native]) => {
		const conversion = new RegExp(base + keyword + base, "gm");
		content = reverse
			? content.replaceAll(native, " " + keyword + " ")
			: content.replaceAll(conversion, native);
	});
	content = content.replaceAll(/ {2,4}/gm, " ");
	content = content.replaceAll(/ {2}/gm, "    ");
	return content;
}

const BaseKeywords = "\\b";

const Keywords = {
    yeet: "console.log",
	
    edge: "try",
	benched: "catch",
    bffr: 'finally',

    dank: '//',
    lgbtq: 'typeof',
	cook: "let",
	blud: "const",
	zesty: "class",
	rizzed: "new",
	fanumtax: "import",
	simp: "export",
	slay: "return",
	fr: "from",
	yap: "for",
	ick: "throw",
	bet: "if",

	bodycount: ".length",

	sus: "0",
	chad: "1",
	ligma: "2",
	chadma: "3",
	susma: "4",
	ligchad: "5",
	suschad: "6",
	chadlig: "7",
	suslig: "8",
	chugma: "9",

	sigma: "break",
	iykyk: "else",
	skibidi: "continue",
	flaze: "numbers",
	aura: "number",
	ded: "null",
	gaslight: "undefined",
	gyat: "this",
	gyatt: "this.",
	bruh: "await",
	tweakin: "async",
	sksksk: "while",
	pulls: "extends",
	daddy: "function",
	goat: "super",
	dab: "in",
	ayo: "of",

	fax: "true",
	cap: "false",


	glowup: "++",
	npc: "--",
	rn: "=>",
    b4: '<=',
    aintnoway: '!==',
    nahh: '!=',
    nah: '!',
    more: '*=',
	finna: "==",
	bestie: ",",
	glazes: "+",
	ghosts: "-",
	jit: "=",
	mid: "<",
	lit: ">",
	period: ";",
	lemme: ".",
	yall: ":",

	mew: "[",
	nocap: "]",
	slaps: "(",
	bussin: ")",
	flex: "{",
	pluh: "}",
};
main(true);
main(false);
