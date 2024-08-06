type City = {
  name: string;
  country: string;
};

// -- `Partial` utility type --
{
  type PartialCity = Partial<City>;

  const city: PartialCity = {
    name: "Istanbul",
  };
}

// -- `Required` utility type --
{
  type CityOptionalCountry = {
    name: string;
    country?: string;
  };

  type RequiredCity = Required<CityOptionalCountry>;

  const city: RequiredCity = {
    name: "Barcelona",
    country: "Spain",
  };
}

// -- `Readonly` utility type --
{
  type ReadonlyCity = Readonly<City>;

  const city: ReadonlyCity = {
    name: "Berlin",
    country: "Germany",
  };

  // Error: Cannot assign to 'name' because it is a read-only property. TS2540.
  city.name = "Hamburg";
}
