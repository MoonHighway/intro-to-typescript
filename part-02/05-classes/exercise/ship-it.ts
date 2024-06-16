// Online store.
// Command line tool to output orders which are ready for shipping.

// TODO: Read up on `override` modifier.

class Order {
  private readonly id: number;
  private readonly items: string[];
  private readonly total: number;

  constructor(id: number, items: string[], total: number) {
    this.id = id;
    this.items = items;
    this.total = total;
  }

  describeOrder(): string {
    return `\n[  ] Order #${this.id}\n\nItems: ${this.items.join(
      ", "
    )}\nTotal: $${this.total}`;
  }
}

{
  // Refactor `Order` class to use property parameters.
  class Order {
    constructor(
      private readonly id: number,
      private readonly items: string[],
      private readonly total: number
    ) {}
  }
}

{
  const ordersArray = [
    new Order(1, ["Shoes", "Shirt", "Pants"], 100),
    new Order(2, ["Shoes", "Shirt", "Pants"], 100),
    new Order(3, ["Shoes", "Shirt", "Pants"], 100),
    new Order(4, ["Shoes", "Shirt", "Pants"], 100),
  ];

  for (const order of ordersArray) {
    console.log(order.describeOrder());
  }

  // Create a class which extends `Order` class.

  class OrderWithShippingDetails extends Order {
    constructor(
      id: number,
      items: string[],
      total: number,
      private readonly address: string
    ) {
      super(id, items, total);
    }

    override describeOrder(): string {
      return `${super.describeOrder()}\n\nShip to: ${this.address}`;
    }
  }

  const ordersWithShippingDetailsArray = [
    new OrderWithShippingDetails(
      1,
      ["Shoes", "Shirt", "Pants"],
      100,
      "123 Main St."
    ),
    new OrderWithShippingDetails(
      2,
      ["Shoes", "Shirt", "Pants"],
      100,
      "123 Main St."
    ),
    new OrderWithShippingDetails(
      3,
      ["Shoes", "Shirt", "Pants"],
      100,
      "123 Main St."
    ),
    new OrderWithShippingDetails(
      4,
      ["Shoes", "Shirt", "Pants"],
      100,
      "123 Main St."
    ),
  ];

  for (const order of ordersWithShippingDetailsArray) {
    console.log(order.describeOrder());
  }

  {
    // -- Refactor `OrderWithShippingDetails` class to be generic.
    // Legacy order system provides `address` as a string.
    // New order system provides `address` as an object.

    class OrderWithShippingDetails<
      AddressType extends string | { [key: string]: string }
    > extends Order {
      constructor(
        id: number,
        items: string[],
        total: number,
        private readonly address: AddressType
      ) {
        super(id, items, total);
      }

      override describeOrder(): string {
        let address;

        if (typeof this.address === "string") {
          address = this.address;
        } else {
          address = Object.entries(this.address)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n");
        }

        return `${super.describeOrder()}\n\nShip to:\n${address}\n\n----`;
      }
    }

    type Address = {
      street: string;
      city: string;
      postalCode: string;
    };

    const ordersWithShippingDetailsArray = [
      new OrderWithShippingDetails(
        1,
        ["Shoes", "Shirt", "Pants"],
        100,
        "123 Main St., Narnia, 12345"
      ),
      // 1. Show how the `AddressType` type argument is inferred from the value of the constructor's `address` argument.
      // 2. Show how we can enforce a specific type by explicitly passing `Address` as the type argument.
      new OrderWithShippingDetails<Address>(
        2,
        ["Shoes", "Shirt", "Pants"],
        100,
        { street: "123 Main St.", city: "Narnia", postalCode: "12345" }
      ),
      new OrderWithShippingDetails(
        3,
        ["Shoes", "Shirt", "Pants"],
        100,
        "123 Main St., Narnia, 12345"
      ),
      new OrderWithShippingDetails(
        4,
        ["Shoes", "Shirt", "Pants"],
        100,
        "123 Main St., Narnia, 12345"
      ),
    ];

    for (const order of ordersWithShippingDetailsArray) {
      console.log(order.describeOrder());
    }
  }
}
