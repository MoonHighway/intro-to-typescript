type User = {
  readonly username: string;
  messages: Message[];
};

type Message = {
  readonly from: User["username"];
  readonly to: User["username"] | User["username"][];
  readonly body: string;
};

type Messages = {
  [key: string]: User;
};

export function createChat(users: string[]) {
  const messages: Messages = {};

  users.forEach((username) => {
    messages[username] = { username, messages: [] };
  });

  function sendMessage(
    from: User["username"],
    to: Message["to"],
    body: string
  ) {
    const message: Message = { from, to, body };

    if (messages[from]) {
      messages[from].messages.push(message);
    }

    if (Array.isArray(to)) {
      to.forEach((username) => {
        if (messages[username]) {
          messages[username].messages.push(message);
        }
      });
    } else {
      if (messages[to]) {
        messages[to].messages.push(message);
      }
    }
  }

  function outputMessagesForUser(username: User["username"]) {
    const user = messages[username];
    if (!user) {
      return;
    }

    user.messages.forEach((message) => {
      if (Array.isArray(message.to)) {
        console.log(
          `${message.from}:\n@${message.to.join(", ")}: ${message.body}\n`
        );
      } else {
        console.log(`${message.from}:\n${message.body}\n`);
      }
    });
  }

  return {
    sendMessage,
    outputMessagesForUser,
  };
}
