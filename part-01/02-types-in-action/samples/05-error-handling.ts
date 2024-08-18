// -- Inferred error type `any` --
{
  try {
    throw new Error('Invalid city ID');
  } catch (error) {
    // This will output `undefined`
    console.error(error.something);
  }
}

// -- Explicit error type `unknown` --
{
  try {
    throw new Error('Invalid city ID');
  } catch (error: unknown) {
    console.error(error);
  }

  try {
    throw new Error('Invalid city ID');
  } catch (error: unknown) {
    // Error: 'error' is of type 'unknown'.
    console.error(error.message);
  }

  try {
    throw new Error('Invalid city ID');
  } catch (error: unknown) {
    // `instanceof` type guard — narrows the type of the `error` variable
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
