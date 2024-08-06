// This is library code which we don't have control over and can't change.
function libraryFunction(): any {
  return 186;
}

// ----

// -- No type errors, but code fails at runtime --
{
  const result = libraryFunction();

  console.log(result.includes("hello"));
}

// --- Use a type assertion to improve type safety ---
{
  const result = libraryFunction() as number;

  console.log(result.includes("hello"));
}

// --- Alternative type assertion syntax ---
{
  const result = <number>libraryFunction();

  console.log(result.includes("hello"));
}
