// -- Suppress an error with @ts-ignore --
{
  // @ts-ignore
  let x: number = 'string';
}

// -- Suppress an error with @ts-expect-error --
{
  // @ts-expect-error: Type 'string' is not assignable to type 'number'.
  let x: number = 'string';
}

// -- Unused '@ts-expect-error' directive --
{
  // @ts-expect-error
  let y: string = 'string';
}
