import { createChat } from "./library.extra-credit.js";

const users = ["dimitri", "chris", "fatima"];

const chat = createChat(users);

chat.sendMessage("dimitri", "chris", "Hello Chris");
chat.sendMessage("chris", "dimitri", "Hey Dimitri, how are you doing?");

chat.sendMessage("fatima", "dimitri", "Is the project on track?");
chat.sendMessage(
  "dimitri",
  "fatima",
  "Yes, everything is ready to launch on Tuesday!"
);

chat.sendMessage(
  "dimitri",
  ["fatima", "chris"],
  "Hey team, what's going on today?"
);
chat.sendMessage(
  "fatima",
  ["dimitri", "chris"],
  "Not much, pretty quiet here in the office today."
);

for (const username of users) {
  console.log(`-- Chat for ${username} --\n`);
  chat.outputMessagesForUser(username);
}
