# Extended Lab: Chat Library 💬

> **Part 1**

Your task is to create a library in [`start/library.ts`](./start/library.ts) which implements the functions that are called in [`start/chat.ts`](./start/chat.ts).

## Requirements

- To get started, run the [Project Setup & Configuration](#project-setup-and-configuration) commands below.
- Try to make the most of the syntax provided by TypeScript.
- Create types and reuse them where possible.
- The output from `chat.ts` should look something like this:

  ```plaintext
  -- Chat for dimitri --

  dimitri:
  Hello Chris

  chris:
  Hey Dimitri, how are you doing?

  fatima:
  Is the project on track?

  dimitri:
  Yes, everything is ready to launch on Tuesday!

  -- Chat for chris --

  dimitri:
  Hello Chris

  chris:
  Hey Dimitri, how are you doing?

  -- Chat for fatima --

  fatima:
  Is the project on track?

  dimitri:
  Yes, everything is ready to launch on Tuesday!
  ```

- Run the chat script during development with `npm run develop`.
- When you're done, check that everything builds correctly with `npm run build`.

### Extra credit

- Allow for a message to be sent to multiple users.

## Project Setup and Configuration

```bash
# Ensure you're in the `start` directory for this lab.
cd part-01/extended-lab/start/

# Set module type to ES modules.
npm pkg set type="module"

# Install dependencies.
npm install --save-dev typescript tsx @total-typescript/tsconfig @types/node

# Create `tsconfig.json`.
echo '{
  "extends": "@total-typescript/tsconfig/tsc/no-dom/library",
  "compilerOptions": {
    "outDir": "dist"
  }
}' > tsconfig.json

# Add `develop` script to `package.json`.
npm pkg set scripts.develop="npx tsx chat.ts"

# Add `build` script to `package.json`.
npm pkg set scripts.build="npx tsc"
```
