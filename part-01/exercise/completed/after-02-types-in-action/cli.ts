import chalk from "chalk";

import { loadDestinations } from "./destinations.js";
import { createTripPlanner } from "./trip-planner.js";

const { destinations, error } = await loadDestinations();

if (!destinations) {
  console.error(chalk.redBright("Error: Could not load destinations data:\n"));
  console.error(error);
  process.exit(1);
}

const tripPlanner = createTripPlanner();

const destinationsList = destinations
  .map((destination) => destination.name)
  .join(", ");

const question =
  chalk.blueBright("Have you been to any of these destinations? ") +
  chalk.greenBright(destinationsList) +
  "\n\n";

const userChoice = await tripPlanner.ask(question);

console.log(chalk.bgBlue(`\nYou chose: ${userChoice}\n`));

tripPlanner.stop();
