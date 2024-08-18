// -- Parameter types --
{
  // Inferred parameter type `any`
  function greetInEnglish(name) {
    return `Hello, ${name}!`;
  }

  console.log(greetInEnglish('Alex'));

  console.log(greetInEnglish(52));

  // Explicitly annotated parameter type `string`
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

  // Explicitly annotated return type `string`
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

// -- Function type expressions --
{
  type Person = {
    name: string;
    age: number;
  };

  function fetchUserData(callback: (data: Person) => void) {
    const data: Person = {
      name: 'Li',
      age: 52,
    };

    callback(data);
  }

  fetchUserData((person) => {
    console.log(person.name);
  });
}
