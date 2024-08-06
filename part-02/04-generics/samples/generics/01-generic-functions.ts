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

// -- Type parameter defaults --
{
  type Theme = {
    primaryColor: string;
    secondaryColor?: string;
  };

  function createTheme<ThemeType extends Theme = Theme>(theme?: ThemeType) {
    const primaryColor = theme?.primaryColor || "#000000";
    const secondaryColor = theme?.secondaryColor || "#FFFFFF";

    return {
      primaryColor,
      secondaryColor,
    };
  }

  const theme1 = createTheme({
    primaryColor: "#FF0000",
  });

  console.log({ theme1 });

  const theme2 = createTheme({
    primaryColor: "#FF0000",
    secondaryColor: "#00FF00",
  });

  console.log({ theme2 });

  const theme3 = createTheme();

  console.log({ theme3 });
}
