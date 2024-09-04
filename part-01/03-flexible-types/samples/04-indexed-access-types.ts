// -- Indexed access type: object property --
{
  interface City {
    name: string;
    country: string;
  }

  type CityName = City["name"];

  const cityNames: CityName[] = ["Seoul", "Sydney", "Seattle"];

  console.log({ cityNames });
}

// -- Indexed access type: element in an array type --
{
  type City = {
    name: string;
    country: string[];
  };

  type CountryName = City["country"][number];

  const cityNames: CountryName[] = [
    "South Korea",
    "Australia",
    "United States of America",
  ];

  console.log({ cityNames });
}
