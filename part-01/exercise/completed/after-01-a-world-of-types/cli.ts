import fs from "node:fs/promises";

type Destination = {
  id: number;
  name: string;
  country: string;
  description: string;
  local_dishes: string[];
  activities: string[];
};

const destinationsJson = await fs.readFile("./data/destinations.json", {
  encoding: "utf-8",
});

const destinationsData: Destination[] = JSON.parse(destinationsJson);

console.log(destinationsData);
