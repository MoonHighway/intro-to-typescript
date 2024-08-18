import { createChat } from "./library.js";

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

for (const username of users) {
  console.log(`-- Chat for ${username} --\n`);
  chat.outputMessagesForUser(username);
}
