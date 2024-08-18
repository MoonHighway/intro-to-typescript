// -- Structural typing: Object literal without type annotation --
{
  type Point = {
    x: number;
    y: number;
  };

  function outputPoint(point: Point) {
    console.log(`x: ${point.x}, y: ${point.y}`);
  }

  // Literal object that matches the structure of Point, but without a type annotation.
  const point = { x: 10, y: 20 };

  outputPoint(point);
}

// -- Structural typing: Objects with the same structure --
{
  type Car = {
    wheels: number;
    brand: string;
  };

  type Motorbike = {
    wheels: number;
    brand: string;
  };

  function outputCarDetails(car: Car) {
    console.log(`Car Brand: ${car.brand}, Wheels: ${car.wheels}`);
  }

  const myBike: Motorbike = { wheels: 2, brand: "Yamaha" };

  // This is allowed due to structural typing,
  // even though we didn't intend for Motorbike to be assignable to Car.
  outputCarDetails(myBike);
}
