type City = {
  name: string;
  country: string;
};

// -- `Pick` utility type --
{
  type CityName = Pick<City, "name">;

  const city: CityName = {
    name: "Paris",
  };
}

//  -- `Omit` utility type --
{
  type CityWithoutCountry = Omit<City, "country">;

  const city: CityWithoutCountry = {
    name: "Rome",
  };
}
