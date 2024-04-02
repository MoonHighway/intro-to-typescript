// `Partial` utility type

type City = {
  name: string;
  country: string;
};

type PartialCity = Partial<City>;

const city1: PartialCity = {
  name: 'Istanbul'
};

// `Required` utility type

type RequiredCity = Required<PartialCity>;

const city2: RequiredCity = {
  name: 'Barcelona',
  country: 'Spain'
};

// `Readonly` utility type

type ReadonlyCity = Readonly<City>;

const city3: ReadonlyCity = {
  name: 'Berlin',
  country: 'Germany'
};

// Error: Cannot assign to 'name' because it is a read-only property
city3.name = 'Hamburg';

// `Pick` utility type

type CityName = Pick<City, 'name'>;

const city4: CityName = {
  name: 'Paris'
};

//  `Omit` utility type

type CityWithoutCountry = Omit<City, 'country'>;

const city5: CityWithoutCountry = {
  name: 'Rome'
};

// `Record` utility type

type CityRecord = Record<string, City>;

const city6: CityRecord = {
  city1: {
    name: 'Prague',
    country: 'Czech Republic'
  },
  city2: {
    name: 'Vienna',
    country: 'Austria'
  },
  city3: {
    name: 'Athens',
    country: 'Greece'
  },
  // Error: Property 'country' is missing in type '{ name: string; }' but required in type 'City'.
  city4: {
    name: 'Budapest'
  }
};
