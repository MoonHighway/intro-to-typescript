export type City = {
  name: string;
  country: string;
};

export function formatCity(city: City): string {
  return `${city.name}, ${city.country}`;
}
