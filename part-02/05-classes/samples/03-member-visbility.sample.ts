// -- Member visibility --

// - All class members — fields and methods — are "public" by default
// - Means they can all be accessed by code outside of the class itself

// - Can control which class methods or properties visible to code outside of the class using three visibility modifiers:
// - `public`, `private` and `protected`

// - `public` is default visibility modifier, never *need* to specify it
// - `public` = member can be accessed anywhere
// - `protected` = member only visible to code inside class or to classes which extend from them
// - `private` = member only visible to code inside the class, not to classes which extend from them

// Different syntax to JavaScript for modifying member visibility
// TODO: How is it different?

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

// TODO: Explain difference between `private fieldName` vs `#fieldName`
// https://www.typescriptlang.org/play/?ts=3.8.3#code/PTAEGYDoA5QQwCYIM6gA4CcCWA3OAXAU1ADMtCAbFAGlAHcALLAYwfg2LnrgE9QB7EqASFmFONgB2Ac3igxcZKjKUEofPwBQIUACNiAV0lw8WcborF+B-MiwiBQ-A2LN+k-HCyTvshUtpvMQMEX3V+UGQDXX9kQmRITW0wADF+DFBCAA84AFs0S1pnYgAFQgxkd3lxJT1KfjphfnjQSX58eAoKBtJ0+Eked0M7GX7k0G9kT0lmKycXasVUDVAORFB1BbIK-AA5PMJaGr2DgQzMQjIspNjQMoqqgG9NDYBiban93MIALkj8KTSADcL1Ar2OX1+-0BILeFyufymMKSGzckiRBmYGgwAAoPidvoiAb4jooCVCkST0BwEdDfABKUDPDYbZxYBLvLA7SGgAC8pC5nwOsJZbI5ENO-Il3xFrKYHPhWCyfOplyVIoAvijQNIOIR8DjGcyWToAJKSCazcSSNRYDrs1UkcpwCzEFYGOJyEgGLqtU6TIjrQSgADaiqyAF1Q8djN8I6CNjoGPh8GhkD8QHQs5A6FB0tJgOaiBhjPgsO44BRgABHAzxMvuZA1uAAWjQ5UqxgoLdj8VeaAIGHcPFyLATEyEOOMOCw0gI6Ug1ukBjg0niIYADFHeTvQAAidl7o3j1GN-iWRf8aQ4gAGAHEAM8AB7gFoQq9oABJHmLIJzuQcGqgN+v7gmSkIaje9KyqAQGUJ6xosvIZ4Xt0143gAEpQ3Rfj+8p-uGQEgfhYFCt8kHQeOWobFqWqaJYHQAFblIQuR8PykiEI09ydjie4AFIsWxe60HuABChASFgwmiQAshgR4guMACa1jyK+ADkHRrh0KyvnwwbFNSuAEMQKhUMoQ65AINh2A4zgEIsSg-EkOhpBk2R5AUhybA6dDuFp9DpAA1i5aKVKhV44sxHBsX+0qEJR4y7H0YphShhCXtee48QFqDHH6hIiaAMWsTwIZ7qR5J7hGSU6AAgshuS5FUtb1uWFp0MQOkTKge4AOoMHw-k+mogwGKAHpuvKAg4OUmzEBpmAmUQGnjMFhA8P5GC2haXCxOZCAAPx7qALagAxGn5fw-DBXofC5HAwVhPt-D5FJnbhOMDA9HaQUYBtu2gAAKjw7YAMrMNgaAdPoJDpMQUDQC5mi3AAIleTKgsteBEKAAD6vZEsip7ogCmLYlOBzEwyWNIb+hOSoVhCapodEMQIujsa0XGgBj2UAPJc4p4z9QFHQc+N8DMLMtQzlwCDtK07QEB1mj8FzkCM98Kp7uDaDtHuII6GJNgg2DhCQ9DHSVt0dCoLoGBwMwG0dG0ngNntqCvpkyDMHA7aLFN6tcxV2uEDVusAMIuCWPBG65YDAwsoMQ1DWAw6slwsTMczGbjViSBQfDZOytjwLpFstpYc0UOMjAsGw3yvssDCOVL-sWu4xfqBgHr2h0lSkBIkCgP1dpsDjpkCqoyDjJUVQrPocgDhgHSGQs-EmHAVsZxLr7LquPnFBaHc+49G11Cm5TjIfTseIQLQutYukLDOdi6GYdoGUI40ZG4IhEii2IIrSQgUCg+yqCIC4-syyjCMjeKeRAbwzyoKADaW10gIHGN4c2adra0CHn-TIWQy5hAAcQOgZgKDIQ8N4Os4R-rBVoLoM2bQ6DjDPp1bAeMKH0CYKwXq1R+BxAyCsIyW88C70zkuFca4Jhk0kggIBOhVITU7hdSSJZQAtQ4PAXQL8nLKHIBZBRC11DMHAAATmpPwA2yBKzfRTGmDMwBpAT2iJANwuRgD4EsVY4AmA7EiMrC2WILZDpNnGK+NQRl9CeCzpYRQxB3bxBckmZx6YQAiBwBYK8CRRxQxEYIfAXi3q+Itn7a2wBXxtCMMwXwLZ8CVPTjDFs4AWzQBbPEuAwBXiiEelUvebZsAFwiSYlAQA
