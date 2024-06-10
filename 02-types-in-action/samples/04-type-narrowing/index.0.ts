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

// -- Types with built-in predicates --

{
  // -- string --

  function capitalizeString(value?: string) {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
  }

  capitalizeString();
  capitalizeString('string');
  capitalizeString(42);

  // -- number --

  function formatNumber(value?: number) {
    if (typeof value === 'number') {
      return value.toLocaleString();
    }
  }

  formatNumber();
  formatNumber(42);
  formatNumber('boom')

  // -- bigint --

  function bigIntToString(value?: bigint) {
    if (typeof value === 'bigint') {
      return value.toString();
    }
  }

  bigIntToString();
  bigIntToString(42n);
  bigIntToString(42)

  // -- boolean --

  function booleanToString(value?: boolean) {
    if (typeof value === 'boolean') {
      return value.toString();
    }
  }

  booleanToString();
  booleanToString(true);
  booleanToString('true');

  // -- symbol --

  function getSymbolDescription(value?: symbol) {
    if (typeof value === 'symbol') {
      return value.description;
    }
  }

  getSymbolDescription();
  getSymbolDescription(Symbol('name'));
  getSymbolDescription('name');

  // -- undefined --

  function isValueUndefined(value: undefined | null) {
    if (typeof value === 'undefined') {
      return true;
    }

    return false;
  }

  isValueUndefined(undefined);
  isValueUndefined(null);

  // -- function --

  function runCallback(callback?: (message: string) => void) {
    if (typeof callback === 'function') {
      callback('Callback has been run');
    }
  }

  runCallback();
  runCallback((message) => console.log(message));
  runCallback('callback');

  // -- array --

  function arrayToString(value?: Array<number>) {
    if (Array.isArray(value)) {
      return value.join(', ');
    }
  }

  arrayToString();
  arrayToString([1, 2, 3]);
  arrayToString('1, 2, 3');

  // -- object --

  function getObjectKeys(obj?: object) {
    if (typeof obj === 'object') {
      return Object.keys(obj);
    }
  }

  getObjectKeys();
  getObjectKeys({ key1: 'value 1', key2: 'value 2' });
  getObjectKeys('key1: value 1, key2: value 2');
}
