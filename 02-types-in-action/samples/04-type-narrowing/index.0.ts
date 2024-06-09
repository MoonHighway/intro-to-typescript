// -- `typeof` type guard in a function --

{
  function formatPopulation(population: number | null) {
    if (typeof population === 'number') {
      return population.toLocaleString();
    }

    return null;
  }

  console.log(formatPopulation(3769495));

  console.log(formatPopulation(null));
}

// -- `instanceof` type guard in a function --

{
  // TODO: Would like to do something different here
  //       This example uses TS class syntax (i.e. `public`),
  //       which we're not covering in this course.
  class City {
    constructor(public name: string) {}
  }

  function outputLocation(location: City | string) {
    if (location instanceof City) {
      console.log(location.name);
    } else {
      console.log(location);
    }
  }

  outputLocation(new City('Copenhagen'));

  outputLocation('New Zealand');

  outputLocation(56);
}

// -- Truthiness narrowing --

{
  function formatLanguagesList(languages: Array<string> | null) {
    if (languages) {
      return languages.join(', ');
    }

    return null;
  }

  const formattedLanguages = formatLanguagesList([
    'Portuguese',
    'Farsi',
    'Swedish'
  ]);

  if (formattedLanguages) {
    console.log(formattedLanguages.toUpperCase());
  }
}

// -- Equality narrowing --

{
  // TODO: Would like to do something different here.
  //       This example doesn't demonstrate equality
  //       narrowing preventing type errors.

  function formatCityName(city: 'Paris' | 'Tokyo' | 'New York') {
    if (city === 'Paris') {
      return 'City of Light';
    }

    if (city === 'Tokyo') {
      return 'City of the Future';
    }

    return 'City That Never Sleeps';
  }

  console.log(formatCityName('Paris'));
  console.log(formatCityName('Tokyo'));
  console.log(formatCityName('New York'));
}
