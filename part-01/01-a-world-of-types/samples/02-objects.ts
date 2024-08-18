// -- Type alias --
{
  type City = {
    name: string;
    population: number;
    country: string;
  };

  let berlin: City = {
    name: 'Berlin',
    population: 3769495,
    country: 'Germany'
  };

  // Missing `City` type property `country`
  // Error: Property 'country' is missing in type '{ name: string; population: number; }' but required in type 'City'.
  let tokyo: City = {
    name: 'Tokyo',
    population: 13929286
  };

  // Property which doesn't exist in `City` type
  // Error: Object literal may only specify known properties, and 'averageTemperature' does not exist in type 'City'.
  let rome: City = {
    name: 'Rome',
    population: 2870500,
    country: 'Italy',
    averageTemperature: 20
  };
}

// -- Optional property --
{
  type City = {
    name: string;
    population?: number;
    country: string;
  }

  let losAngeles: City = {
    name: 'Los Angeles',
    country: 'United States'
  };

  let sydney: City = {
    name: 'Sydney',
    population: 5312163,
    country: 'Australia'
  };
}

// -- Readonly property --
{
  type City = {
    readonly name: string;
    population: number;
    country: string;
  }

  let amsterdam: City = {
    name: 'Amsterdam',
    population: 821752,
    country: 'Netherlands'
  };

  // Error: Cannot assign to 'name' because it is a read-only property
  amsterdam.name = 'Rotterdam';

  amsterdam.population = 651446;
}

// -- Interface --
{
  interface City {
    name: string;
    population: number;
    country: string;
  }

  let newYork: City = {
    name: 'New York',
    population: 8537673,
    country: 'United States'
  };

  // Missing `City` interface property `population`
  // Error: Property 'population' is missing in type '{ name: string; country: string; }' but required in type 'City'.
  let london: City = {
    name: 'London',
    country: 'United Kingdom'
  };

  // Property which doesn't exist in `City` interface
  // Error: Object literal may only specify known properties, and 'language' does not exist in type 'City'.
  let paris: City = {
    name: 'Paris',
    population: 2140526,
    country: 'France',
    language: 'French'
  };
}
