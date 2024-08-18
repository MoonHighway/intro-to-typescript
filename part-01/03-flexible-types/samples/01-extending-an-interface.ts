// -- Extending an interface --
{
  interface Country {
    readonly name: string;
    readonly code: string;
    population?: number;
  }

  interface CountryWithCurrency extends Country {
    currency: {
      name: string;
    };
  }

  const country1: Country = {
    name: "Narnia",
    code: "NN",
    population: 256,
  };

  const country2: CountryWithCurrency = {
    name: "New Zealand",
    code: "NZ",
    population: 5_135_300,
    currency: {
      name: "New Zealand dollar",
    },
  };
}

// -- Extending multiple interfaces --
{
  interface Country {
    readonly name: string;
    readonly code: string;
    population?: number;
  }

  interface Currency {
    currency: {
      name: string;
    };
  }

  interface CountryWithCurrencyLanguages extends Country, Currency {
    languages: string;
  }

  const country3: CountryWithCurrencyLanguages = {
    name: "New Zealand",
    code: "NZ",
    population: 5_135_300,
    currency: {
      name: "New Zealand dollar",
    },
    languages: "English, Maori",
  };
}
