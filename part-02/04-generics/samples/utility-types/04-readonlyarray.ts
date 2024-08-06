type City = {
  name: string;
  country: string;
};

// -- Array of cities --
{
  const cities: City[] = [
    {
      name: "Madrid",
      country: "Spain",
    },
    {
      name: "Lisbon",
      country: "Portugal",
    },
  ];

  const firstCity = cities.shift();

  console.log({ firstCity });
}

// -- `ReadonlyArray` utility type --
{
  type ReadonlyCities = ReadonlyArray<City>;

  const cities: ReadonlyCities = [
    {
      name: "Madrid",
      country: "Spain",
    },
    {
      name: "Lisbon",
      country: "Portugal",
    },
  ];

  const firstCity = cities.shift();

  console.log({ firstCity });
}

// -- Modifying values of elements in a `ReadonlyArray` --
{
  type ReadonlyCities = ReadonlyArray<City>;

  const cities: ReadonlyCities = [
    {
      name: "Madrid",
      country: "Spain",
    },
    {
      name: "Lisbon",
      country: "Portugal",
    },
  ];

  if (cities[0]) {
    cities[0].name = "Barcelona";
  }
}
