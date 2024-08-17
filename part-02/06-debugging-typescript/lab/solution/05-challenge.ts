import fs from "fs/promises";

type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  gender: string;
  films: string[];
  url: string;
};

const characterData = await fs.readFile("character.json", "utf-8");
const character: Character = JSON.parse(characterData);

console.log(
  `${character.name} was in ${character.films
    .map((film) => film.toUpperCase())
    .join(", ")}`
);
