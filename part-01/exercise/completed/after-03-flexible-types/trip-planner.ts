import chalk from "chalk";

import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

import type { Destination, DestinationMetadata } from "./types.ts";

function pickRandomItems(
  items: DestinationMetadata[],
  count: number
): DestinationMetadata[] {
  const shuffledItems = structuredClone(items);

  shuffledItems.sort(() => 0.5 - Math.random());

  return shuffledItems.slice(0, count);
}

export function createTripPlanner() {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  async function ask(question: string, choices: DestinationMetadata[]): Promise<DestinationMetadata> {
    const randomChoices = pickRandomItems(choices, 5);

    const choiceList = randomChoices
      .map((choice, index) => `${index + 1}) ${choice.name}`)
      .join("\n");

    let questionText = chalk.blueBright(question) + "\n\n";
    questionText += chalk.greenBright(choiceList) + "\n\n";

    const userChoice = await rl.question(questionText);

    const choice = randomChoices[parseInt(userChoice, 10) - 1];

    if (!choice) {
      console.error(chalk.redBright("Invalid choice. Please try again.\n"));
      return ask(question, choices);
    }

    return choice;
  }

  function suggest(userChoice: DestinationMetadata, destination: Destination) {
    console.log(
      chalk.bgBlue(
        `\nYou chose ${userChoice.name} — you should visit ${destination.name} in ${destination.country}!\n\n${destination.description}\n`
      )
    );
  }

  function stop() {
    rl.close();
  }

  return {
    ask,
    stop,
    suggest,
  };
}
