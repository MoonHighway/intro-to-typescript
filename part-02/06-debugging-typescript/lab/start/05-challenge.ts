// This code *looks* fine, but if you run it with `tsx` you'll see there's a runtime bug:
//   npx tsx 05-challenge.ts
// Add types to help avoid this kind of bug in the future, then fix the runtime error.

import fs from "fs/promises";

const characterData = await fs.readFile("character.json", "utf-8");
const character = JSON.parse(characterData);

console.log(
  `${character.name} was in ${character.films.toUpperCase().join(", ")}`
);
