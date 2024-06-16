type InvalidAirport = {
  name: string;
  code: string;
  country: string;
};

const invalidAirports: InvalidAirport[] = [
  { name: "Heathrow", code: "lhr", country: "UK" },
  { name: "JFK", code: "jfk", country: "USA" },
  { name: "Schiphol", code: "ams", country: "Netherlands" },
  { name: "Changi", code: "sin", country: "Singapore" },
  { name: "Dubai", code: "dxb", country: "UAE" },
  { name: "Los Angeles", code: "lax", country: "USA" },
];

type ValidAirport = InvalidAirport & {
  original: InvalidAirport;
};

function transformData<InputType, OutputType>(
  data: InputType[],
  transform: (input: InputType) => OutputType
) {
  return data.map(transform);
}

const airports: ReadonlyArray<ValidAirport> = transformData(invalidAirports, (airport): ValidAirport => {
  return {
    ...airport,
    code: airport.code.toUpperCase(),
    original: airport,
  };
});

console.table(airports);

// ---- Extra credit ----

invalidAirports.push({ name: "Frankfurt", code: "fra", country: "Germany" });

invalidAirports.push({ name: "Charles de Gaulle", code: "cdg", country: "France" });

invalidAirports.push({ name: "Haneda", code: "hnd", country: "Japan" });
