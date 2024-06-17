// realistic business example of using generic functions

// inferred type argument

function createOrder<ItemsType>(id: number, items: ItemsType[], total: number) {
  return {
    id,
    items,
    total,
    describeOrder() {
      return `Order #${this.id} contains: ${this.items.join(", ")}. Total: $${
        this.total
      }`;
    },
  };
}

const ordersArray = [
  createOrder(1, ["Shoes", "Shirt", "Pants"], 100),
  createOrder(2, ["Shoes", "Shirt", "Pants"], 100),
  createOrder(3, ["Shoes", "Shirt", "Pants"], 100),
  createOrder(4, ["Shoes", "Shirt", "Pants"], 100),
];

// another realistic business example of using generic functions. theme: data transformation

function transformData<InputType, OutputType>(
  data: InputType[],
  transform: (input: InputType) => OutputType
) {
  return data.map(transform);
}

const ordersWithShippingDetailsArray = transformData(ordersArray, (order) => ({
  ...order,
  address: "123 Main St.",
}));

for (const order of ordersWithShippingDetailsArray) {
  console.log(order.describeOrder());
}

// another one! theme: chat

function createMessage<MessageType>(
  sender: string,
  message: MessageType
) {
  return {
    sender,
    message,
    timestamp: new Date(),
  };
}

const messages = [
  createMessage("@alice", "Hello, Bob!"),
  createMessage("@bob", "Hi, Alice!"),
];

for (const message of messages) {
  console.log(`[${message.timestamp.toISOString()}] ${message.sender}: ${message.message}`);
}
