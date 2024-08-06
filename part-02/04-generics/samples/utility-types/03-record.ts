type City = {
  name: string;
  country: string;
};

// -- `Record` utility type --
{
  type CityRecord = Record<string, City>;

  const city6: CityRecord = {
    city1: {
      name: "Prague",
      country: "Czech Republic",
    },
    city2: {
      name: "Vienna",
      country: "Austria",
    },
    city3: {
      name: "Athens",
      country: "Greece",
    },
    // Error: Property 'country' is missing in type '{ name: string; }' but required in type 'City'. TS2741.
    city4: {
      name: "Budapest",
    },
  };
}
