// -- Inferred types --
{
  let topAttraction = 'Eiffel Tower';

  // Assign boolean to a string
  // Error: Type 'boolean' is not assignable to type 'string'.
  topAttraction = true;

  let averageTemperature = 22;

  let population = 42_000_000;

  // Assign string to a number
  // Error: Type 'string' is not assignable to type 'number'.
  population = '42 million';

  let inNorthernHemisphere = true;

  // Assign string to a boolean
  // Error: Type 'string' is not assignable to type 'boolean'.
  inNorthernHemisphere = 'false';

  let favoriteCity = null;

  // Assign string to a null
  // Error: Type '"Hong Kong"' is not assignable to type 'null'.
  favoriteCity = 'Hong Kong';
}

// -- Type declarations using type annotations --
{
  let topAttraction: string = 'Eiffel Tower';

  // Assign boolean to a string
  // Type 'boolean' is not assignable to type 'string'.
  topAttraction = true;

  let population: number = 42_000_000;

  // Assign string to a number
  // Error: Type 'string' is not assignable to type 'number'.
  population = '42 million';

  let inNorthernHemisphere: boolean = true;

  // Assign string to a boolean
  // Error: Type 'string' is not assignable to type 'boolean'.
  inNorthernHemisphere = 'false';

  let favoriteCity: null = null;

  // Assign string to a null
  // Error: Type '"Hong Kong"' is not assignable to type 'null'.
  favoriteCity = 'Hong Kong';

  // Assign string to a number
  // Error: Type 'string' is not assignable to type 'number'.
  let averageTemperature: number = '22';
}

// -- Inferred literal types for constant variables --
{
  const utcOffset = 5;

  const country = 'Bali';

  // Assign new value to a constant
  // Error: Cannot assign to 'country' because it is a constant.
  country = 6;
}

// -- Avoid using the `any` type --
{
  let language: any = 'Mandarin';

  language = 56;

  // JavaScript runtime error: `language.toUpperCase` is not a function
  // TODO: Check what the error is
  language.toUpperCase();
}

// -- Type aliases --
{
  type City = string;

  let favoriteCity: City = 'New York City';

  // Assign boolean to a string
  // Error: Type 'boolean' is not assignable to type 'City'.
  favoriteCity = false;
}
