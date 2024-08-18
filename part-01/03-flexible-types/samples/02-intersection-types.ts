// -- Intersection type with type aliases --
{
  type City = {
    name: string;
    country: string;
  };

  type Population = {
    population: number;
  };

  const city1: City = {
    name: "Istanbul",
    country: "Turkey",
  };

  const city2: Population = {
    population: 15_000_000,
  };

  type CityWithPopulation = City & Population;

  const city3: CityWithPopulation = {
    name: "Amsterdam",
    country: "Netherlands",
    population: 821752,
  };
}

// -- Intersection type with type alias and inline type --
{
  type City = {
    name: string;
    country: string;
  };

  const city1: City = {
    name: "Venice",
    country: "Italy",
  };

  type CityWithPopulation = City & {
    population: number;
  };

  const city2: CityWithPopulation = {
    name: "Yokohama",
    country: "Japan",
    population: 3_700_000,
  };
}
