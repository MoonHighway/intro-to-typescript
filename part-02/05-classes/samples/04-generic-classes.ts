// -- Generic classes --

// -- Non-generic class --
{
  // Elements in `languages` field array can only be strings
  // Can make `languages` field flexible by making class generic.

  class Country {
    readonly languages: string[] = [];

    constructor(readonly name: string, readonly code: string) {}

    addLanguage(language: string) {
      this.languages.push(language);
    }
  }

  const india = new Country("India", "IN");

  india.addLanguage("Hindi");
  india.addLanguage("Bengali");

  console.log({ india });

  const indiaLanguages = india.languages;
  //    ^?
}

// -- Make the class generic --
{
  // Add `LanguageType` type parameter.
  class Country<LanguageType> {
    readonly languages: LanguageType[] = [];

    constructor(readonly name: string, readonly code: string) {}

    // Use `LanguageType` type variable.
    addLanguage(language: LanguageType) {
      this.languages.push(language);
    }
  }

  const india = new Country<{ name: string; percentage: number; }>("India", "IN");

  india.addLanguage({ name: "Hindi", percentage: 57 });
  india.addLanguage({ name: "Bengali", percentage: 9 });

  console.log(india.languages[0]?.percentage);
  //                ^? //=>

  const italy = new Country<string>("Italy", "IT");

  italy.addLanguage("Italian");

  console.log(italy.languages[0]);
  //                ^?

  {
    // Make object type more readable: refactor inline object type to a named type.

    type Language = {
      name: string;
      percentage: number;
    };

    const india = new Country<Language>("India", "IN");

    india.addLanguage({ name: "Hindi", percentage: 57 });
    india.addLanguage({ name: "Bengali", percentage: 9 });

    console.log(india.languages[0]?.percentage);
    //                ^?
  }
}
