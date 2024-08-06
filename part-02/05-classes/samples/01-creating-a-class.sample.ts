// -- Creating a class: fields, constructors, methods --

// -- Plain JavaScript class --
{
  class Country {
    // Field declarations
    // @ts-expect-error: Member 'name' implicitly has an 'any' type. TS7008.
    name;
    // @ts-expect-error: Member 'code' implicitly has an 'any' type. TS7008.
    code;
  }

  const nigeria = new Country();

  nigeria.name = "Nigeria";
  nigeria.code = "NG";

  console.log({ nigeria });
}

// -- Fields --
{
  /**
   * - Properties are public and writeable by default
   * - Type annotation optional — defaults to any
   * - Initializers
   *   - strictPropertyInitialization - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization
   *   - Run when class is instantiated
   *   - Used to infer type
   *   - Can be used to set default value
   * - `readonly` field modifier
   */

  class Country {
    name: string = 'Unknown';
    code: string = 'Unknown';
  }

  const nigeria = new Country();

  nigeria.name = "Nigeria";
  nigeria.code = "NG";

  console.log({ nigeria });
}

// -- Constructors --
{
  /**
   * - Automatically called when class is instantiated
   * - Supports parameter types
   * - Can’t have return type annotations
   * - Class instance type is always returned
   * - Initialize fields
   * - `this` is a reference to the class instance
   * - `readonly` field modifier
   *     - Field value can only be assigned in the constructor
   */

  class Country {
    readonly name: string;
    readonly code: string;

    constructor(name: string, code: string) {
      this.name = name;
      this.code = code;
    }
  }

  const nigeria = new Country("Nigeria", "NG");

  console.log({ nigeria });
}

// -- Constructor using parameter properties --
{
  /**
   * - "TypeScript offers special syntax for turning a constructor parameter into a class property with the same name and value."
   * - Parameter property is created by prefixing a constructor argument with a visibility modifier.
   * - Automatically initializes fields.
   * - Shorter syntax, can help reduce boilerplate.
   * - Magic behaviour that isn't obvious when reading the code.
   * - JavaScript code generated is the same as manually declaring the fields.
   */

  class Country {
    constructor(readonly name: string, readonly code: string) {}
  }

  const nigeria = new Country("Nigeria", "NG");

  console.log({ nigeria });
}

// -- Methods --
{
  /**
   * - Function inside a class
   * - Support same type annotations as functions
   * - Parameter types
   * - Return value type
   */

  class Country {
    readonly name: string;
    readonly code: string;
    languages: string[] = [];

    constructor(name: string, code: string) {
      this.name = name;
      this.code = code;
    }

    addLanguage(language: string) {
      this.languages.push(language);
    }

    describeLanguages(): string {
      return `The languages spoken in ${
        this.name
      } include: ${this.languages.join(", ")}`;
    }
  }

  const nigeria = new Country("Nigeria", "NG");

  nigeria.addLanguage("Hausa");
  nigeria.addLanguage("Igbo");
  nigeria.addLanguage("Yoruba");
  nigeria.addLanguage("English");

  console.log({ nigeria });

  const description = nigeria.describeLanguages();

  console.log(description);

  const italy = new Country("Italy", "IT");

  italy.addLanguage("Italian");

  console.log({ italy });
}
