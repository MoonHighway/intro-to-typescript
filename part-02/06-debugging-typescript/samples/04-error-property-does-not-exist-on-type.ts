{
  type Person = {
    name: string;
    age: number;
  }

  const person: Person = {
    name: "Alice",
    age: 30,
  };

  // Error: Property 'active' does not exist on type 'Person'. TS2339.
  person.active = true;

  console.log(person);
}

// -- Fix: Add property to the type --
{
  type Person = {
    name: string;
    age: number;
    active: boolean;
  }

  // Caveat: All properties must be initialized when creating the object.
  const person: Person = {
    name: "Alice",
    age: 30,
    active: true,
  };

  console.log(person);
}

// -- Fix: Add property to the type and make it optional --
{
  type Person = {
    name: string;
    age: number;
    active?: boolean;
  }

  const person: Person = {
    name: "Alice",
    age: 30,
  };

  person.active = true;

  console.log(person);
}

// -- Fix: Use the `Record` utility type --
{
  // Record<Keys, Type> is a generic type that's available globally in TypeScript.
  // Allows for properties with any name.
  const person: Record<string, string | number | boolean> = {
    name: "Alice",
    age: 30,
  };

  person.active = true;

  console.log(person);
}

// -- Fix: Add index signature to object type --
{
  type Person = {
    name: string;
    age: number;
    // Allows for properties with any name.
    [key: string]: string | number | boolean;
  }

  const person: Person = {
    name: "Alice",
    age: 30,
  };

  person.active = true;

  console.log(person);
}
