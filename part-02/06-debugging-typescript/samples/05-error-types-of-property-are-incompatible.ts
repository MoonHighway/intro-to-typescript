{
  type Car = {
    make: string;
    model: string;
    year: number;
  };

  type Vehicle = {
    make: string;
    model: string;
    year: string;
  };

  let vehicle: Vehicle = {
    make: "Toyota",
    model: "Corolla",
    year: "2020",
  };

  // Error: Types of property 'year' are incompatible. TS2322.
  let car: Car = vehicle;
}

// -- Fix: Change type of `year` property in `Vehicle` object type. --
{
  type Car = {
    make: string;
    model: string;
    year: number;
  };

  type Vehicle = {
    make: string;
    model: string;
    year: number;
  };

  let vehicle: Vehicle = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
  };

  let car: Car = vehicle;
}
