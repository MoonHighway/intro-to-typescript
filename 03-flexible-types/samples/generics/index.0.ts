// Generic function

{
  function printCity<Type>(city: Type): void {
    console.log(city);
  }

  printCity<string>('London');
  printCity<number>(123);
}

// Generic class

{
  class City<Type> {
    constructor(public name: Type) {}
  }

  const city = new City<string>('Paris');
  console.log(city.name);
}

// Generic type

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
