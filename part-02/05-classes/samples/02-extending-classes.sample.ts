// -- Extending classes --

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
    return `The languages spoken in ${this.name} include: ${this.languages.join(
      ", "
    )}`;
  }
}

{
  /**
   * - New child class will inherit the fields, constructor and methods of parent class.
   * - `extends` keyword used to create class that’s child of another class.
   * - Child class inherits everything from the parent class.
   */
  class CountryWithCurrency extends Country {}

  const colombia = new CountryWithCurrency("Colombia", "CO");

  colombia.addLanguage("Spanish");
  colombia.addLanguage("English");

  console.log({ colombia });

  const colombiaLanguages = colombia.describeLanguages();

  console.log({ colombiaLanguages });
}

// -- Implement members for the `CountryWithCurrency` class --
{
  /**
   * - `CountryWithCurrency` class doesn’t have own members
   * - Accept `currency` field when we instantiate a new instance
   * - Create `constructor(name: string, code: string, currency)`
   *   - `this.currency = currency;`
   *   - `super()` must be called in constructor before accessing `this`
   * - Add a `currency;` field
   * - Add a `Currency` type
   */

  type Currency = {
    name: string;
    code: string;
    symbol: string;
  };

  class CountryWithCurrency extends Country {
    currency: Currency;

    constructor(name: string, code: string, currency: Currency) {
      // Calling parent class constructor.
      super(name, code);

      this.currency = currency;
    }

    describeCurrency(): string {
      // Accessing parent class property `name`.
      return `The currency of ${this.name} is the ${this.currency.name} (${this.currency.code}).`;
    }

    describe(): string {
      let description = `Country description: ${this.name}\n`;
      // Accessing parent class method `describeLanguages()`.
      description += this.describeLanguages() + "\n";
      description += this.describeCurrency();

      return description;
    }
  }

  const columbiaCurrency = {
    name: "Colombian peso",
    code: "COP",
    symbol: "$",
  };

  const colombia = new CountryWithCurrency("Colombia", "CO", columbiaCurrency);
  console.log({ colombia });

  const colombiaCurrency = colombia.describeCurrency();
  console.log({ colombiaCurrency });

  const colombiaDescription = colombia.describe();
  console.log({ colombiaDescription });

  const italy = new Country("Italy", "IT");
  italy.addLanguage("Italian");

  console.log({ italy });
}
