import fs from "node:fs/promises";

type Destination = {
  id: number;
  name: string;
  country: string;
  description: string;
  local_dishes: string[];
  activities: string[];
};

export async function loadDestinations(): Promise<{
  destinations: Destination[] | null;
  error: unknown;
}> {
  let destinationsData: Destination[] = [];

  try {
    const destinationsJson = await fs.readFile("./data/destinations.json", {
      encoding: "utf-8",
    });

    destinationsData = JSON.parse(destinationsJson);
  } catch (error) {
    return { destinations: null, error };
  }

  return { destinations: destinationsData, error: null };
}
