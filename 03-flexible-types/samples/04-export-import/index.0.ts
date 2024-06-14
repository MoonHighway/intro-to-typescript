// export and import types

// city.ts

export interface City {
  name: string;
  country: string;
}

export function formatCity(city: City): string {
  return `${city.name}, ${city.country}`;
}

// -- `import type` --

import type { City } from './city.js';

const city: City = {
  name: 'Mumbai',
  country: 'India'
};

// -- Inline type import --

import { formatCity, type City } from './city.js';

const city: City = {
  name: 'Milan',
  country: 'Italy'
};

console.log(formatCity(city));
