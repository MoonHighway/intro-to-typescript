import chalk from "chalk";

import type { Question } from "./types.ts";

import { loadDestinations } from "./destinations.js";
import { createTripPlanner } from "./trip-planner.js";

const { destinations, error } = await loadDestinations();

if (!destinations) {
  console.error(chalk.redBright("Error: Could not load destinations data:\n"));
  console.error(error);
  process.exit(1);
}

const questions: Question[] = [
  {
    question: "What food would you like to eat on your trip?",
    choices: destinations.getMetadata({ type: "food" }),
  },
  {
    question: "What would you like to do on your trip?",
    choices: destinations.getMetadata({ type: "activity" }),
  }
];

const tripPlanner = createTripPlanner();

for (const { question, choices } of questions) {
  const userChoice = await tripPlanner.ask(question, choices);

  const destination = destinations.getById(userChoice.destinationId);

  if (destination) {
    tripPlanner.suggest(userChoice, destination);
  }
}

tripPlanner.stop();
