// -- Member visibility --

// - All class members — fields and methods — are "public" by default
// - Means they can all be accessed by code outside of the class itself

// - Can control which class methods or properties visible to code outside of the class using three visibility modifiers:
// - `public`, `private` and `protected`

// - `public` is default visibility modifier, never *need* to specify it
// - `public` = member can be accessed anywhere
// - `protected` = member only visible to code inside class or to classes which extend from them
// - `private` = member only visible to code inside the class, not to classes which extend from them

// - `private` is not the same as using the `#` modifier to create a private field!

/*

Add visibility modifiers to the `Country` class:

  protected readonly name: string;

  protected readonly code: string;

  private languages: string[] = [];

  public addLanguage() {}

  protected describeLanguages() {}

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
    return `The languages spoken in ${this.name} include: ${this.languages.join(
      ", "
    )}`;
  }
}

type Currency = {
  name: string;
  code: string;
  symbol: string;
};

/*

Add visibility modifiers to the `CountryWithCurrency` class:

  private currency: Currency;

  private describeCurrency() {}

  public describe() {}

*/

class CountryWithCurrency extends Country {
  currency: Currency;

  constructor(name: string, code: string, currency: Currency) {
    super(name, code);

    this.currency = currency;
  }

  describeCurrency(): string {
    return `The currency of ${this.name} is the ${this.currency.name} (${this.currency.code}).`;
  }

  describe(): string {
    let description = `Country description: ${this.name}\n`;
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
