// -- Non-generic type --
{
  type Country = {
    name: string;
    capital: string;
  };

  const country: Country = {
    name: 'France',
    capital: 'Paris'
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
    name: 'France',
    capital: 'Paris'
  };

  console.log(country.name);
  console.log(country.capital);
}
