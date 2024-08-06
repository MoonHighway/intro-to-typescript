// -- Non-generic function --
{
  function logValue(city: string) {
    console.log(city);
  }

  logValue("London");

  // Error: Argument of type 'number' is not assignable to parameter of type 'string'. TS2345.
  logValue(1_500_000);
}

// -- Generic function with a `ValueType` type parameter --
function logValueGeneric<ValueType>(city: ValueType) {
  console.log(city);
}

// -- Type parameter inference --
{
  logValueGeneric("London");
  logValueGeneric(123);
}

// -- Explicit type parameters --
{
  logValueGeneric<string>("London");
  logValueGeneric<number>(1_500_000);
}

// -- Multiple type parameters --
{
  function logValues<ValueType1, ValueType2>(value1: ValueType1, value2: ValueType2) {
    console.log(value1);
    console.log(value2);
  }

  logValues("London", 123);
}

// -- Generic constraints (extends) --
{
  type City = {
    name: string;
    country: string;
  };

  function logCityName<CityType extends City>(city: CityType) {
    console.log(city.name);
  }

  logCityName({
    name: "Madrid",
    country: "Spain",
  });

  // Error: Argument of type 'number' is not assignable to parameter of type 'City'. TS2345.
  logCityName(123);
}
