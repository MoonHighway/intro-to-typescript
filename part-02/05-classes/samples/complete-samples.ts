{
  /**
   * -- Creating a class --
   *
   * - Classes template for creating an object
   * - Can store data inside them + code to work on that data
   * - Classes are a language feature in JavaScript
   * - TS adds types + few extra language features on top of JavaScript classes
   *
   * - `class` keyword
   * - Class name
   * - Class body — part in curly braces
   * - Create new instance `new` keyword
   * - Class does nothing without members
   *
   * https://www.notion.so/Creating-a-class-4a50d3f0deec4fbb9948e7797025ca6e
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

  console.log("Nigeria:", nigeria);
  console.log("Nigeria languages:", nigeria.describeLanguages());

  const italy = new Country("Italy", "IT");
  italy.addLanguage("Italian");

  console.log("Italy:", italy);
}

{
  // -- Extending a class --
  // https://www.notion.so/Extending-a-class-d633ba0d2e3b43efb9619ec798589223

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

  type Currency = {
    name: string;
    code: string;
    symbol: string;
  };

  const columbiaCurrency: Currency = {
    name: "Colombian peso",
    code: "COP",
    symbol: "$",
  };

  const colombia = new CountryWithCurrency("Colombia", "CO", columbiaCurrency);
  colombia.addLanguage("Spanish");
  colombia.addLanguage("English");
  console.log("Colombia:", colombia);

  const colombiaLanguages = colombia.describeLanguages();
  console.log(colombiaLanguages);

  const colombiaCurrency = colombia.describeCurrency();
  console.log(colombiaCurrency);

  const colombiaDescription = colombia.describe();
  console.log(colombiaDescription);
}

{
  // -- Member visibility --
  // https://www.notion.so/Member-visibility-c65e77afba7a454a941cb09d11378ced

  class Country {
    protected readonly name: string;
    protected readonly code: string;
    private languages: string[] = [];

    constructor(name: string, code: string) {
      this.name = name;
      this.code = code;
    }

    public addLanguage(language: string) {
      this.languages.push(language);
    }

    protected describeLanguages(): string {
      return `The languages spoken in ${
        this.name
      } include: ${this.languages.join(", ")}`;
    }
  }

  class CountryWithCurrency extends Country {
    private currency: Currency;

    constructor(name: string, code: string, currency: Currency) {
      super(name, code);

      this.currency = currency;
    }

    private describeCurrency(): string {
      return `The currency of ${this.name} is the ${this.currency.name} (${this.currency.code}).`;
    }

    public describe(): string {
      let description = `Country description: ${this.name}\n`;
      description += this.describeLanguages() + "\n";
      description += this.describeCurrency();

      return description;
    }
  }

  type Currency = {
    name: string;
    code: string;
    symbol: string;
  };

  const columbiaCurrency: Currency = {
    name: "Colombian peso",
    code: "COP",
    symbol: "$",
  };

  const colombia = new CountryWithCurrency("Colombia", "CO", columbiaCurrency);
  colombia.addLanguage("Spanish");
  colombia.addLanguage("English");
  console.log("Colombia:", colombia);

  const colombiaDescription = colombia.describe();
  console.log(colombiaDescription);
}

{
  // -- Generic classes --
  // https://www.notion.so/Generic-classes-6150675fddb54ac6af7f2c9fdfdfd593

  class Country<LanguageType> {
    name: string;

    code: string;

    languages: LanguageType[] = [];

    constructor(name: string, code: string) {
      this.name = name;
      this.code = code;
    }

    addLanguage(language: LanguageType) {
      this.languages.push(language);
    }
  }

  type Language = {
    name: string;
    percentage: number;
  };

  const india = new Country<Language>("India", "IN");

  india.addLanguage({ name: "Hindi", percentage: 57 });
  india.addLanguage({ name: "Bengali", percentage: 9 });

  console.log(india);

  const indiaLanguages = india.languages;
  //    ^?

  console.log(indiaLanguages[0]?.percentage);
}
