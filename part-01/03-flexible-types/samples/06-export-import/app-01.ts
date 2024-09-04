import type { City } from "./city.js";
import { formatCity } from "./city.js";

const city: City = {
  name: "Mumbai",
  country: "India",
};

console.log(formatCity(city));
