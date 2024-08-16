import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

export function createTripPlanner() {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  async function ask(question: string): Promise<string> {
    const userResponse = await rl.question(question);

    return userResponse;
  }

  function stop() {
    rl.close();
  }

  return {
    ask,
    stop,
  };
}
