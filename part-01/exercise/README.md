# Exercise: Trip Planner CLI 🧳

> **Part 1: Sections 1 - 3**

## Stage 01: Project setup

In the terminal, change into the directory for this exercise:

```bash
cd part-01/exercise/start
```

Create a `package.json` file with all of the default values:

```bash
npm init --yes
```

Install [`typescript`](https://www.npmjs.com/package/typescript) package as a dependency:

```bash
npm install --save-dev typescript
```

Create a new file, `cli.ts`, and add the following code:

```typescript
let destination = "Prague";

console.log(destination);
```

Compile the TypeScript code to JavaScript:

```bash
npx tsc cli.ts
```

Open up `cli.js` and notice how the code is almost identical to what we have in `cli.ts`.

Note: You might notice the following error in Visual Studio Code for `cli.ts` when `cli.js` is also open: `Cannot redeclare block-scoped variable 'destination'.` — this error can be ignored.

Run the `cli.js` script with Node.js:

```bash
node cli.js
```

Remove `cli.js`:

```bash
rm cli.js
```

Open up `package.json`, remove the `test` script under `scripts` and add a `build` and a `cli` script:

```json
"scripts": {
  "build": "tsc cli.ts",
  "cli": "node cli.js"
}
```

Test the `build` script:

```bash
npm run build
```

Should see `cli.js` generated again.

Test the `cli` script:

```bash
npm run cli
```

In `cli.ts`, hover over the `destination` variable to show how TypeScript has inferred the type of `string`.

Change the value of `destination` to `42`:

```typescript
let destination = 42;
```

Hover over `destination` and notice that the inferred type has changed to `number`.

Add this line in before the `console.log()` call:

```typescript
destination = destination.toUpperCase();
```

Hover over `toUpperCase` and show the type error:

```plaintext
error TS2339: Property 'toUpperCase' does not exist on type 'number'.
```

Open the 'Problems' panel and show the error is displayed there too.

Compile the script:

```bash
npm run build
```

We're seeing this error because TypeScript knows that numbers in JavaScript don't have a method named `toUpperCase`.

Change the value of `destination` to `Paris`:

```typescript
let destination = "Paris";
```

Notice that the type error has been fixed.

Build and run the CLI:

```bash
npm run build && npm run cli
```

## Stage 02: TypeScript configuration

Clear the contents of `cli.ts`.

Import the Node.js filesystem module:

```typescript
import fs from "node:fs/promises";
```

Hover over `"node:fs/promises"` and notice the two type errors:

```plaintext
Cannot find module 'node:fs' or its corresponding type declarations.

ESM syntax is not allowed in a CommonJS module when 'verbatimModuleSyntax' is enabled.ts(1286)
```

To fix the first error, we need to configure the TypeScript compiler so it knows that this is a Node.js project.

Install a [base TSConfig](https://github.com/total-typescript/tsconfig/):

```bash
npm install --save-dev @total-typescript/tsconfig
```

To use this base TSConfig, create a new file, `tsconfig.json`, and add the following configuration:

```json
{
  // Pull in the preset configuration
  "extends": "@total-typescript/tsconfig/tsc/no-dom/app",
  "compilerOptions": {
    // Tell TypeScript where to put the compiled JavaScript files.
    // Can be whatever name you like, but `dist` or `build` are common conventions.
    "outDir": "dist"
  }
}
```

When a `tsconfig.json` file exists in a directory it indicates that the directory is the root of a TypeScript project.

Now that we've configured this as a TypeScript project, we no longer need to point the TypeScript compiler at `cli.ts`.

Update the `build` and `cli` scripts in `package.json`:

```json
"build": "tsc",
"cli": "node dist/cli.js"
```

The last thing we need to do for TypeScript to correctly handle code that we'll be running with Node.js, is to install the types for the Node.js Core API:

```bash
npm install --save-dev @types/node
```

Notice that the type error for the `node:fs` import has now been fixed.

To fix the ESM syntax error, open `package.json` and add:

```json
"type": "module"
```

Tells Node.js we're using ES modules in this project and the TypeScript compiler will detect that too.

Notice in `cli.ts` that the type error for ESM syntax has been fixed.

Build and run the CLI:

```bash
npm run build && npm run cli
```

Open up `dist/cli.js` to see its contents.

## Stage 03: Load the destinations data

Add code in `cli.ts` to read, parse and output the contents of a JSON file:

```typescript
const destinationsJson = await fs.readFile("./data/destinations.json", {
  encoding: "utf-8",
});

const destinationsData = JSON.parse(destinationsJson);

console.log(destinationsData);
```

Build and run the CLI:

```bash
npm run build && npm run cli
```

## Stage 04: Set up tsx for development

Visual Studio Code and the TypeScript compiler are both doing type checking for us. [`tsx`](https://www.npmjs.com/package/tsx) is as a faster way for us to compile and run TypeScript code in development. During development, we can lean on Visual Studio Code to help us catch type errors while we're writing the code, and use `tsx` to run the code for us.

Install `tsx` as a dependency:

```bash
npm install --save-dev tsx
```

Open `package.json` and change the `cli` script to use `tsx`:

```json
"cli": "tsx cli.ts"
```

Remove the `dist` directory to avoid confusion:

```bash
rm -r dist/
```

Run the CLI: `npm run cli`

## Stage 05: Create a Destination object type

Hover over the `destinationsJson` to see the inferred type: `string`. This is fine, as `readFile()` function will return the contents of our JSON file as one big long string.

Hover over `destinationsData` to see the inferred type: `any`. TypeScript doesn't have any way of knowing what will be returned by `JSON.parse` — it could be an object, an array or `undefined`.

This is a problem because the inferred `any` type means that we lose type safety when working with the `destinationsData` variable.

Add the following code after the `destinationsData` variable:

```typescript
destinationsData.toUpperCase();
```

Notice that there's no type error in VS Code, but let's run our code and see what happens:

```bash
npm run cli
```

Our script crashes with this error:

```plaintext
TypeError: destinationsData.toUpperCase is not a function
```

Notice that this is a JavaScript error, not a TypeScript error

 We can improve the type safety of our code by adding a type for the `destinationsData` variable.

Comment out the `toUpperCase()` call:

```typescript
// destinationsData.toUpperCase();
```

Create a type below the `import` statement:

```typescript
type Destination = {}
```

Run the CLI so we can look at the shape of the data: `npm run cli`

We can refer to the data we've logged in the terminal for property names and types, then add them to the `Destination` interface.

In our CLI, we're only going to use some of the destination properties that are available to us, so we only need to define those properties in the `Destination` type.

Add properties to the `Destination` type:

```typescript
type Destination = {
  id: number;
  name: string;
  country: string;
  description: string;
};
```

Add properties which are arrays:

```typescript
type Destination = {
  // ...
  local_dishes: string[];
  activities: string[];
}
```

Add a type annotation to the `destinationsData` variable which uses the `Destination` type:

```typescript
const destinationsData: Destination[] = JSON.parse(destinationsJson);
```

Uncomment the `destinationsData.toUpperCase();` line and we'll see that we now have a type error.

By creating a type that describes the object for each destination, and then using it in a type annotation, we've improved the type safety of our code and reduced the risk of causing JavaScript runtime errors.

Remove the `destinationsData.toUpperCase();` line of code.

Use the TypeScript compiler to build the app:

```bash
npm run build
```

Run the compiled app:

```bash
node dist/cli.js
```

## Stage 06: Create a function that has types

Rename `cli.ts` to `destinations.ts`.

Remove the `console.log()` and wrap file reading code in an async function:

```typescript
export async function loadDestinations() {
  // Existing file reading code here
}
```

Add a return type to the function:

```typescript
export async function loadDestinations(): Promise<Destination[]> {
  // ...
}
```

Notice how the return value of the function is wrapped by the `Promise` utility type.

`async` functions always return a promise. This promise resolves with the return value from the function.

We're getting a type error for the function return type as we're not currently returning anything from our function.

Fix the type error by returning the destinations at the end of the `loadDestinations()` function:

```typescript
return destinationsData;
```

Notice how the types behave through each part of the `loadDestinations()` function.

Create a new file, `cli.ts`, and add this code to call our `loadDestinations()` function:

```typescript
import { loadDestinations } from "./destinations.js";

const destinations = await loadDestinations();

console.log(destinations);
```

Run the CLI: `npm run cli`

## Stage 07: Add error handling

In `destinations.ts`, refactor the `loadDestinations()` function and wrap code in a `try/catch` block:

```typescript
let destinationsData: Destination[] = [];

try {
  const destinationsJson = await fs.readFile("./data/destinations.json", {
    encoding: "utf-8",
  });

  destinationsData = JSON.parse(destinationsJson);
} catch (error) {
  return { destinations: null, error };
}
```

Notice how `error` has a type of `unknown`.

Change final `return` statement in `loadDestinations()` function to return an object:

```typescript
return { destinations: destinationsData, error: null };
```

Update `loadDestinations()` function return type:

```typescript
export async function loadDestinations(): Promise<{
  // This is a union type
  destinations: Destination[] | null;
  error: unknown;
}> {
```

In `cli.ts`, refactor the call to `loadDestinations()`:

```typescript
const { destinations, error } = await loadDestinations();
```

And add a check for `destinations`:

```typescript
if (!destinations) {
  console.error("Error: Could not load destinations data:\n");
  console.error(error);
  process.exit(1);
}
```

Run the CLI: `npm run cli`

Should output destinations as before.

Test the error handling: change the filepath in the `loadDestinations()` function to `./data/destinations2.json` (a file which doesn't exist).

Run the CLI: `npm run cli`

Should see an error on the command-line.

## Stage 08: Install a third-party library with built-in types

Add colour to our error message with the library [`chalk`](https://www.npmjs.com/package/chalk).

Open the page for the `chalk` package on npm: [https://www.npmjs.com/package/chalk](https://www.npmjs.com/package/chalk)

Notice the `TS` icon next to the `chalk` package name and hover over it. It tells us that "This package contains built-in TypeScript declarations". This means that we don't need to install an `@types` package with type definitions as they're already in the package.

Install `chalk` as a dependency:

```bash
npm install chalk
```

Import it at the top of `cli.ts`:

```typescript
import chalk from "chalk";
```

Update the first call to `console.error` by wrapping the string with a call to `chalk.redBright`:

```typescript
console.error(chalk.redBright("Error: Could not load destinations data:\n"));
```

Notice as we type `chalk.` we get a list of methods suggested for us.

Right-click on the word `redBright` and click on `Go to Type Definition`.

Will open up `index.d.ts` in the `chalk` package under the `node_modules` directory.

Exploring types provided by your package can be helpful if you're having problems with type errors. Can be helpful for learning more about types too!

Run the CLI: `npm run cli`

The error message text is now red.

Change the filepath in the `loadDestinations()` function back to `./data/destinations.json`

Run the CLI: `npm run cli`

## Stage 09: Create a trip planner factory function

Create a new file, `trip-planner.ts`.

Import the Node.js core modules that we'll need to create an interactive CLI:

```typescript
import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
```

Create a new function:

```typescript
export function createTripPlanner() {}
```

Inside the function, create a `readline` interface:

```typescript
const rl = readline.createInterface({ input: stdin, output: stdout });
```

Create a function for asking the user a question:

```typescript
async function ask(question) {}
```

Hover over the `question` parameter and notice the type error:

```plaintext
Parameter 'question' implicitly has an 'any' type.
```

Can fix this error by adding a type annotation:

```typescript
async function ask(question: string) {
```

Add explicit return type to `ask()` function:

```typescript
async function ask(question: string): Promise<string> {
```

Add code to the `ask()` function to prompt the user with the question and return their response:

```typescript
const userResponse = await rl.question(question);

return userResponse;
```

Create a `stop` function, which can be used to close our `readline` interface instance:

```typescript
function stop() {
  rl.close();
}
```

This function will stop our script from accepting user input. If we don't call it the script will never stop running!

Return an object containing the two functions we've just created:

```typescript
return {
  ask,
  stop,
};
```

Hover over variables and functions to observe their types.

## Stage 10: Use the trip planner

In `cli.ts`, import the `createTripPlanner()` function after the other import statements:

```typescript
import { createTripPlanner } from "./trip-planner.js";
```

Remove the existing `console.log()` call:

```diff
- console.log(destinations);
```

Then create a new trip planner instance:

```typescript
const tripPlanner = createTripPlanner();
```

And ask the user what destination they'd like to visit:

```typescript
const question = "Which destination would you like to visit? Paris, Mumbai, Beijing\n\n";

const userChoice = await tripPlanner.ask(question);

console.log(`\nYou chose: ${userChoice}\n`);
```

Then stop our script from accepting user input:

```typescript
tripPlanner.stop();
```

Run the CLI: `npm run cli`

## Stage 11: Dynamic destinations

In `cli.ts`, let's use our `destinations` data to dynamically generate the list of destinations:

```typescript
const destinationsList = destinations
  .map((destination) => destination.name)
  .join(", ");
```

Notice the auto suggestions as we typed `destination.`.

Notice what happens if we change `destination.name` to `destination.whatever`. This is type checking in action!

Update the question to use `destinationsList`:

```typescript
const question = "Have you been to any of these destinations? " + destinationsList + "\n\n";
```

Run the CLI: `npm run cli`

Add some colour in to make things more readable.

Wrap the question in one colour, and the `destinationList` in a different colour, for example:

```typescript
const question =
  chalk.blueBright("Have you been to any of these destinations? ") +
  chalk.greenBright(destinationsList) +
  "\n\n";
```

And wrap output of the user response in another colour:

```typescript
console.log(chalk.bgBlue(`\nYou chose: ${userChoice}\n`));
```

Run the CLI: `npm run cli`

## Stage 12: Add trip preference questions

In `cli.ts`, create a `questions` array above the `tripPlanner`:

```typescript
const questions = [
  {
    question: "What food would you like to eat on your trip?",
    choices: ['Pizza', 'Sushi', 'Tacos'],
  },
];
```

Above the `questions` variable, create a `Question` type to describe the object in this array:

```typescript
type Question = {
  question: string;
  choices: string[];
}
```

Annotate the `questions` variable with the new type:

```typescript
const questions: Question[] = [
```

Try changing one of the `choices` array values to a number, e.g. `76`, and notice what happens.

Add another question to the `questions` array:

```typescript
{
  question: "What would you like to do on your trip?",
  choices: ['Hike', 'Sightsee', 'Relax'],
}
```

Notice how TypeScript is using the types we've added to ensure the `questions` array and the objects it contains are structured correctly and contain values with the correct types.

Now we'll update our code to use these questions and choices.

In `trip-planner.ts`, add a `choices` parameter to the `ask` function:

```typescript
async function ask(question: string, choices: string[]): Promise<string> {
```

Inside the function, build a list from the choices:

```typescript
const choiceList = choices
  .map((choice, index) => `${index + 1}) ${choice}`)
  .join("\n");

let questionText = question + "\n\n";
questionText += choiceList + "\n\n";
```

Replace `question` with `questionText` and rename `userResponse` to `userChoice`:

```diff
- const userResponse = await rl.question(question);
+ const userChoice = await rl.question(questionText);

- return userResponse
+ return userChoice;
```

In `cli.ts`, remove the `destinationsList` and `question` variables:

```diff
-const destinationsList = destinations
-  .map((destination) => destination.name)
-  .join(", ");

-const question =
-  chalk.blueBright("Which destination would you like to visit? ") +
-  chalk.greenBright(destinationsList) +
-  "\n\n";
```

Wrap the `userChoice` variable and the `console.log()` call in a `for...of` loop:

```typescript
for (const { question, choices } of questions) {
  // ...
}
```

Notice the type error when we hover over the call to `ask()`.

Fix the error by passing `choices` as the second argument to `ask()`:

```typescript
const userChoice = await tripPlanner.ask(question, choices);
```

Run the CLI: `npm run cli`

Let's use `chalk` again to add in some colour.

Import the `chalk` library at the top of `trip-planner.ts`:

```typescript
import chalk from "chalk";
```

In the `questionText` variable, pass `question` to `chalk.blueBright()`:

```diff
- let questionText = question + "\n\n";
+ let questionText = chalk.blueBright(question) + "\n\n";
```

And pass `choiceList` to `chalk.greenBright()`:

```diff
- questionText += choiceList + "\n\n";
+ questionText += chalk.greenBright(choiceList) + "\n\n";
```

Run the CLI: `npm run cli`

## Stage 13: Parse destinations metadata

Open up `destinations.ts`.

Before the `return` statement in the `loadDestinations()` function, extract the local dishes from each destination to create a single array:

```typescript
const destinationsMetadata = destinationsData.flatMap((destination) => {
  return destination.local_dishes.map((dish) => ({
    name: dish,
    // Different metadata available for each destination.
    // Later we want to be able to identify what type of metadata this is.
    type: "food",
    // Include destination ID in this object so we know which destination
    // this piece of metadata relates to.
    destinationId: destination.id,
  }));
});
```

`flatMap()` is a built-in JavaScript function. The elements of the array that we return in the `flatMap()` callback will be added to a single array, which will be the return value of the `flatMap()` function call.

See [Array.prototype.flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) on MDN for more details.

Log out `destinationsMetadata` so we can check the array we've constructed:

```typescript
console.log({ destinationsMetadata });
```

Run the CLI: `npm run cli`

Refer to this output to help us create a type that we can use to add an explicit type to `destinationsMetadata`.

Below the `Destination` interface, add a new interface:

```typescript
type DestinationMetadata = {
  name: string;
  type: string;
  destinationId: number;
}
```

Add type annotation to `destinationsMetadata` variable:

```typescript
const destinationsMetadata: DestinationMetadata[] = ...
```

Remove `console.log()` call:

```diff
- console.log({ destinationsMetadata });
```

## Stage 14: Refactor types so they can be reused

In `destinations.ts`, create a function to make the destinations metadata available:

```typescript
// Want `filter` parameter to be an object,
// containing a `type` property which is a `string`

function getMetadata(filter: { type: string }) {
  return destinationsMetadata.filter((item) => item.type === filter.type);
}
```

Add a return type to the `getMetadata` function:

```typescript
function getMetadata(filter: { type: string }): DestinationMetadata[] {
```

Change the object returned by the `loadDestinations()` function:

```typescript
return {
  // No longer returning `destinationsData`, but an object containing functions.
  destinations: {
    getMetadata,
  },
  error: null,
};
```

Notice the type error in the returned object for `getMetadata`.

Fix the return type for the `loadDestinations()` function. Change the `destinations` property:

```typescript
export async function loadDestinations(): Promise<{
  destinations: {
    // Use the `typeof` keyword to get the type for the `getMetadata` function.
    getMetadata: typeof getMetadata;
  } | null;
  error: unknown;
}> {
```

Using `typeof` allowed us to avoid redefining the type for the `getMetadata` function in our function's return type.

In `cli.ts`, update the value of the `choices` property for the "What food..." question:

```diff
  {
    question: "What food would you like to eat on your trip?",
-   choices: ['Pizza', 'Sushi', 'Tacos'],
+   choices: destinations.getMetadata({ type: "food" }),
  },
```

Notice the type error for the `choices` property. We'll fix this in a moment.

Run the CLI to test that the new `destinations.getMetadata()` method is working:

```bash
npm run cli
```

We need to change the `choices` property in the `Question` type to reference the `DestinationMetadata` interface, but that lives in `destinations.ts`.

Currently we have types defined semi-randomly across our application codebase.

Let's consolidate our types and make them easier to reuse.

Create a new file, `types.ts`.

Cut and paste the `Destination` and `DestinationMetadata` interfaces from `cli.ts` and paste them in to `types.d.ts`:

Cut and paste the `Question` type from `cli.ts` and add it in to `types.ts`.

Add the `export` keyword before each `type` declaration in `types.ts`, for example:

```typescript
export type Destination = {
  // ...
}
```

This will allow us to import these types in other modules.

At the top of `destinations.ts`, import the types that we're already using in this module:

```typescript
import type { Destination, DestinationMetadata } from "./types.ts";
```

This is a type-only import, so we can use the `import type` to make it clear that we are importing types.

Notice that we're importing `types.ts` rather than `types.js` to make it clearer that this import line and the imported types won't exist in the compiled JavaScript code.

In `cli.ts`, import the types that we're already using in this module:

```typescript
import type { Question } from "./types.ts";
```

Can now fix the type error with the question `choices` in `cli.ts` by altering the `Question` type in `types.ts`:

```diff
  export type Question = {
    question: string;
-   choices: string[];
+   choices: DestinationMetadata[];
  }
```

In `cli.ts` we now have a type error for the second question's `choices` property.

Remove all the values from the second question's `choices` array to make it an empty array:

```diff
  {
    question: "What would you like to do on your trip?",
-   choices: ['Hike', 'Sightsee', 'Relax'],
+   choices: [],
  },
```

We'll add some values back in for this question shortly.

After all this refactoring, we have one more type error left to fix.

Hover over `choices` in the call to the `tripPlanner.ask()` function and notice the type error:

```plaintext
Argument of type 'DestinationMetadata[]' is not assignable to parameter of type 'string[]'.
```

At the top of `trip-planner.ts`, import the `DestinationMetadata` type:

```typescript
import type { DestinationMetadata } from "./types.ts";
```

Change the type for the `ask()` function's `choices` parameter:

```diff
  async function ask(
    question: string,
-   choices: string[]
+   choices: DestinationMetadata[]
  ): Promise<string> {
```

Back in `cli.ts`, the type error we had when passing `choices` to the `tripPlanner.ask()` function should now be fixed.

We've changed `choices` from being an array of strings to an array of objects.

We need to open `trip-planner.ts` and update the `map()` callback in the `ask()` function:

```diff
- .map((choice, index) => `${index + 1}) ${choice}`)
+ .map((choice, index) => `${index + 1}) ${choice.name}`)
```

Run the CLI: `npm run cli`

## Stage 15: Give the user random choices

Reduce the number of choices we give the user for each question, and make them random.

In `trip-planner.ts` create a new function above the `createTripPlanner()` function:

```typescript
function pickRandomItems(
  items: DestinationMetadata[],
  count: number
): DestinationMetadata[] {

}
```

Implement the logic in `pickRandomItems()`:

```typescript
// Create a deep copy of the `items` array so we don't accidentally change the original array which was passed through
const shuffledItems = structuredClone(items);

// This sort comparator function returns a random number between -0.5 and 0.5
// Calling `sort()` with this function randomizes the order of our array items
shuffledItems.sort(() => 0.5 - Math.random());

// Return the first `count` items from the array
return shuffledItems.slice(0, count);
```

([`structuredClone()` documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone))

Update the `ask` function to use our new `pickRandomItems()` function:

```diff
-    const choiceList = choices
+    const randomChoices = pickRandomItems(choices, 5);
+
+    const choiceList = randomChoices
       .map((choice, index) => `${index + 1}) ${choice.name}`)
       .join("\n");
```

Run the CLI: `npm run cli`

## Stage 16: Validate user choices

Display the name of the food the user chose, instead of the number they entered.

In the `ask()` function in `trip-planner.ts`, alter the function to return the destination metadata object which relates to the number the user entered:

```typescript
// Use `parseInt()` to make `userChoice` a number
// Subtract 1 from the number as `randomChoices` array is zero indexed
const choice = randomChoices[parseInt(userChoice, 10) - 1];

// Replace `return userChoice;` with this
return choice;
```

Hover over the `return` keyword and notice the type error. This happens because we have `noUncheckedIndexedAccess` set to `true` in our TSConfig.

Fix it by checking the indexed access:

```typescript
if (!choice) {
  console.error(chalk.redBright("Invalid choice. Please try again.\n"));
  return ask(question, choices);
}
```

Hover over the `choice` variable and notice the type TypeScript has inferred.

Update the return type for the `ask()` function to match the type of the new return value:

```diff
   async function ask(
     question: string,
     choices: DestinationMetadata[]
-  ): Promise<string> {
+  ): Promise<DestinationMetadata> {
     const randomChoices = pickRandomItems(choices, 5);
```

In `cli.ts`, alter the string in the `console.log()` call to access the `name` property of the `userChoice` object that we're now returning from `tripPlanner.ask()`:

```diff
-  console.log(chalk.bgBlue(`\nYou chose: ${userChoice}\n`));
+  console.log(chalk.bgBlue(`\nYou chose: ${userChoice.name}\n`));
```

Run the CLI: `npm run cli`

## Stage 17: Retrieve destination by ID

Tell the user the name of the country which relates to the choice the user made.

In `destination.ts`, create a new `getById()` function after the `getMetadata()` function:

```typescript
function getById(id: number) {
  return destinationsData.find((destination) => destination.id === id);
}
```

Add `getById` to the return type of the `loadDestinations()` function:

```diff
 export async function loadDestinations(): Promise<{
   destinations: {
     getMetadata: typeof getMetadata;
+    getById: typeof getById;
   } | null;
   error: unknown;
 }> {
```

Add `getById()` function to `destinations` object that's returned at the end of the `loadDestinations()` function:

```diff
   return {
     destinations: {
       getMetadata,
+      getById,
     },
     error: null,
   };
```

In `cli.ts`, after `const userChoice`, call the `destinations.getById()` method:

```typescript
// Use the `destinationId` property which is available on the `userChoice` object
const destination = destinations.getById(userChoice.destinationId);
```

Then edit the existing `console.log()` call to use this data:

```typescript
console.log(chalk.bgBlue(`\nYou chose ${userChoice.name} from ${destination.name}\n`));
```

Notice the type error when you hover over `destination`:

```plaintext
'destination' is possibly 'undefined'.
```

Wrap the `console.log()` call in an `if` statement to fix it:

```diff
+ if (destination) {
    console.log(chalk.bgBlue(`\nYou chose ${userChoice.name} from ${destination.name}\n`));
+ }
```

This narrows the type of the `destination` variable from `Destination | undefined` to `Destination`.

Hover over `destination` at different places in this code to see this in action.

## Stage 18: Suggest a country to visit

In `trip-planner.ts`, create a new function afer the `ask()` function:

```typescript
function suggest(userChoice: DestinationMetadata, destination: Destination) {
  console.log(
    chalk.bgBlue(
      `\nYou chose ${userChoice.name} — you should visit ${destination.name} in ${destination.country}!\n\n${destination.description}\n`
    )
  );
}
```

Update the `import type` statement at the top of the module to import the missing `Destination` type:

```diff
-import type { DestinationMetadata } from "./types.ts";
+import type { Destination, DestinationMetadata } from "./types.ts";
```

Add the `suggest()` function to the object which is returned at the end of the `createTripPlanner()` function:

```diff
   return {
     ask,
+    suggest,
     stop,
   };
```

Update `cli.ts` to use the new `suggest()` method. Replace the `console.log()` call with:

```typescript
tripPlanner.suggest(userChoice, destination);
```

Run the CLI: `npm run cli`

## Stage 19: Parse activites metadata

In `destinations.ts`, refactor the `flatMap` callback that's used to build the `destinationsData` array:

```diff
   const destinationsMetadata: DestinationMetadata[] =
     destinationsData.flatMap((destination) => {
-      return destination.local_dishes.map((dish) => ({
+      const foods = destination.local_dishes.map((dish) => ({
         name: dish,
         type: "food",
         destinationId: destination.id,
       }));
+
+      return [
+        ...foods,
+      ];
     });
```

Parse activities for all destinations:

```typescript
const activities = destination.activities.map((activity) => ({
  name: activity,
  type: "activity",
  destinationId: destination.id,
}));
```

And add them to the array of destination metadata that we're returning for each destination:

```diff
  return [
    ...foods,
+   ...activities,
  ];
```

Use this new activities metadata in `cli.ts`:

```diff
   },
   {
     question: "What would you like to do on your trip?",
-    choices: [],
+    choices: destinations.getMetadata({ type: "activity" }),
   },
 ];
```

Run the CLI: `npm run cli`

## Stage 20: Improve types for destinations metadata

Show in `destinations.ts` how we can set any values for the `type` property in the objects returned by the `map()` callback functions.

In `types.ts`, create `Food` intersection type after the `DestinationMetadata` type:

```typescript
export type Food = DestinationMetadata & {
  type: "food";
};
```

This is an example of a string type literal.

Create an `Activity` intersection type:

```typescript
export type Activity = DestinationMetadata & {
  type: "activity";
};
```

Import the new intersection types in `destination.ts`:

```diff
- import type { Destination, DestinationMetadata } from "./types.ts";
+ import type {
+   Destination,
+   DestinationMetadata,
+   Food,
+   Activity,
+ } from "./types.ts";
```

`map()` is a generic function. This means that we can pass a type argument to it, which will improve the type-safety of our code.

Pass the `Food` type as a type argument to the `map()` callback for foods:

```diff
- const foods = destination.local_dishes.map((dish) => ({
+ const foods = destination.local_dishes.map<Food>((dish) => ({
```

Hover over the `foods` variable and notice that it now has a type of `Food[]`.

Right-click the function name `map` and click on **Go to Type Definition** to see the type definition for this generic function.

Adding the `Food` type here ensures we return an object with the correct properties and value types from the `map()` callback.

Pass the `Activity` type as a type argument to the `map()` callback for activities:

```diff
- const activities = destination.activities.map((activity) => ({
+ const activities = destination.activities.map<Activity>((activity) => ({
```

Pass the `DestinationMetadata` type as a type argument to the `flatMap()` callback for `destinationsMetadata`:

```diff
- destinationsData.flatMap((destination) => {
+ destinationsData.flatMap<DestinationMetadata>((destination) => {
```

Can now remove the type annotation from the `destinationsMetadata` variable:

```diff
- const destinationsMetadata: DestinationMetadata[] =
+ const destinationsMetadata =
```

## Stage 21: Build for distribution

Use the TypeScript compiler to build the app:

```bash
npm run build
```

Explore the compiled JavaScript files in the `dist/` directory.

Run the compiled app:

```bash
node dist/cli.js
```

----

## Attribution

The data in `destinations.json` is provided by FreeTestApi.com.
