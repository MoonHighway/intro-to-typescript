import fs from "node:fs/promises";

import type {
  Destination,
  DestinationMetadata,
  Food,
  Activity,
} from "./types.ts";

export async function loadDestinations(): Promise<{
  destinations: {
    getMetadata: typeof getMetadata;
    getById: typeof getById;
  } | null;
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

  const destinationsMetadata = destinationsData.flatMap<DestinationMetadata>(
    (destination) => {
      const foods = destination.local_dishes.map<Food>((dish) => ({
        name: dish,
        type: "food",
        destinationId: destination.id,
      }));

      const activities = destination.activities.map<Activity>((activity) => ({
        name: activity,
        type: "activity",
        destinationId: destination.id,
      }));

      return [...foods, ...activities];
    }
  );

  function getMetadata(filter: { type: string }): DestinationMetadata[] {
    return destinationsMetadata.filter((item) => item.type === filter.type);
  }

  function getById(id: number) {
    return destinationsData.find((destination) => destination.id === id);
  }

  return {
    destinations: {
      getMetadata,
      getById,
    },
    error: null,
  };
}
