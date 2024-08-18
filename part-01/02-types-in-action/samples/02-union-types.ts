// -- Anonymous union type --
{
  let language1 = null;

  // Error: Type '"French"' is not assignable to type 'null'.
  language1 = 'French';

  let language2: string | null = null;

  language2 = 'Polish';
}

// -- Type alias for a union type --
{
  type Language = string | null;

  let language: Language = null;

  language = 'Mandarin';
}

// -- Union type with literal types --
{
  type CityName = 'Seoul' | 'Seattle' | 'Sydney';

  let cityName: CityName = 'Seoul';
  cityName = 'Seattle';
  cityName = 'Sydney';

  cityName = 'Paris';
}

// -- Function parameter with a union type --
{
  type CityName = 'Berlin' | 'Tokyo' | 'Rome';

  function welcomeToCity(city: CityName): string {
    return `Welcome to ${city}!`;
  }

  console.log(welcomeToCity('Berlin'));
  console.log(welcomeToCity('Tokyo'));
  console.log(welcomeToCity('Rome'));
  console.log(welcomeToCity('Bangkok'));
}
