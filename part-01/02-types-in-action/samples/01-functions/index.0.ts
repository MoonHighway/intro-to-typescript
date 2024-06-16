// -- Parameter types --

{
  // Inferred parameter type `any`
  function greetInEnglish(name) {
    return `Hello, ${name}!`;
  }

  console.log(greetInEnglish('Alex'));

  console.log(greetInEnglish(52));

  // Explicit parameter type `string`
  function greetInFrench(name: string) {
    return `Bonjour, ${name}!`;
  }

  console.log(greetInFrench('Alex'));

  // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
  console.log(greetInFrench(52));
}

// -- Return types --

{
  // Inferred return type `string`
  function greetInItalian(name: string) {
    return `Ciao, ${name}!`;
  }

  console.log(greetInItalian('Jordan'));

  // Explicit return type `string`
  function greetInSpanish(name: string): string {
    if (name === 'Jordan') {
      // Error: Type 'null' is not assignable to type 'string'.
      return null;
    }

    return `Hola, ${name}!`;
  }

  console.log(greetInSpanish('Jordan'));
}

// -- async functions --

{
  // Inferred return type `Promise<any>`
  async function fetchTitle(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    return data.title;
  }

  const title = fetchTitle('https://jsonplaceholder.typicode.com/todos/1');
  console.log(title);

  // Explicit return type `Promise<number>`
  async function fetchId(url: string): Promise<number> {
    const response = await fetch(url);
    const data = await response.json();

    return data.id;
  }

  const id = fetchId('https://jsonplaceholder.typicode.com/todos/1');
  console.log(id);
}

// -- Function overloads --

{
  // -- Example 1 --
  // Function which accepts one or three arguments.

  // Function overload signatures
  function add(x: number): number;
  function add(x: number, y: number, z: number): number;

  // Implementation signature
  function add(x: number, y?: number, z?: number): number {
      if (y !== undefined && z !== undefined) {
          return x + y + z;
      } else {
          return x + x;
      }
  }

  console.log(add(5));

  console.log(add(5, 7, 2));

  // Error: No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments. ts(2575)
  console.log(add(5, 7));

  // -- Example 2 --
  // Same number of arguments, but different types, use a union type instead of function overloads.

  function multiply(value: number | { x: number, y: number }): number {
      if (typeof value === 'number') {
          return value * value;
      } else {
          return value.x * value.y;
      }
  }

  console.log(multiply(5));

  console.log(multiply({ x: 5, y: 7 }));

  // Error: Argument of type '{ x: number; }' is not assignable to parameter of type 'number | { x: number; y: number; }'. ts(2345)
  console.log(multiply({ x: 26 }));
}
