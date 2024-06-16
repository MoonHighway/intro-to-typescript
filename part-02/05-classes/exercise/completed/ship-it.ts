class Order {
  constructor(
    private readonly id: number,
    private readonly items: string[],
    private readonly total: number
  ) {}

  describeOrder(): string {
    return `\n[  ] Order #${this.id}\n\nItems: ${this.items.join(
      ", "
    )}\nTotal: $${this.total}`;
  }
}

class OrderWithShippingDetails<
  AddressType extends string | Record<string, string>
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
  state: string;
  postalCode: string;
};

const orders = [
  new OrderWithShippingDetails<Address>(1, ["T-shirt", "Jeans"], 120, {
    street: "123 Elm St",
    city: "Springfield",
    state: "IL",
    postalCode: "62704",
  }),
  new OrderWithShippingDetails(
    2,
    ["Skirt", "Blouse", "Flats"],
    200,
    "456 Maple Ave, Anytown, CA, 90210"
  ),
  new OrderWithShippingDetails(
    3,
    ["Sweater", "Scarf"],
    110,
    "789 Oak Dr, Smallville, KS, 66002"
  ),
  new OrderWithShippingDetails<Address>(4, ["Sneakers"], 90, {
    street: "456 Maple Ave",
    city: "Anytown",
    state: "CA",
    postalCode: "90210",
  }),
];

for (const order of orders) {
  console.log(order.describeOrder());
}
