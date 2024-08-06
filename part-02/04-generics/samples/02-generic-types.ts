// -- Non-generic type --
{
  type Country = {
    name: string;
    capital: string;
  };

  const country: Country = {
    name: "France",
    capital: "Paris",
  };

  console.log(country.name);
  console.log(country.capital);
}

// -- Generic type --
{
  type Country<Type> = {
    name: Type;
    capital: Type;
  };

  const country: Country<string> = {
    name: "France",
    capital: "Paris",
  };

  console.log(country.name);
  console.log(country.capital);
}

// -- Generic type with multiple arguments --
{
  type Country<NameType, CapitalType> = {
    name: NameType;
    capital: CapitalType;
  };

  type Capital = {
    name: string;
  };

  const country: Country<string, Capital> = {
    name: "France",
    capital: {
      name: "Paris"
    },
  };

  console.log(country.name);
  console.log(country.capital.name);
}

// -- `Array` generic type (globally available in TypeScript) --
{
  const numbers: Array<number> = [1, 2, 3, 4, 5];
  const strings: Array<string> = ["a", "b", "c", "d", "e"];

  console.log(numbers);
  console.log(strings);
}

// -- Examples of utility types available globally in TypeScript --
{
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

  // -- `Record` utility type --
  {
    const city6: Record<string, City> = {
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
}
