import Structure from "./structure";

export default function Inject(content: string, structure: Structure) {
	const lines = content.split(/\;|\n|\;\n/);
	const injectedLines = lines.map(line => structure.parse(line));
	return injectedLines;
}
