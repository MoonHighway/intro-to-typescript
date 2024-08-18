// -- Array type syntax --
{
  const populations: number[] = [8537673, 2140526, 3769495];

  // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
  populations.push('8.6 million');
}

// -- Array generic type syntax --
{
  const populations: Array<number> = [8537673, 2140526, 3769495];

  // Error: Type 'boolean' is not assignable to type 'string'.
  const languages: Array<string> = ['English', 'French', 'German', false];
}

// -- Tuple type --
{
  const highestTemperature: [string, number, boolean] = [
    'Vancouver',
    34.4,
    true
  ];

  // Argument of type 'null' is not assignable to parameter of type 'string | number | boolean'.
  highestTemperature.push(null);
}
