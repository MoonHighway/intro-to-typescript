# Exercise: Ship It! 📦

> **Part 2: Section 5: Classes**

We're going to build a command-line tool to help our warehouse team output orders which are ready to be shipped 🛳️

----

## Create an order class

Create an `Order` class and define a few fields that we can use to store order information:

```typescript
class Order {
  // `private` modifier = The field can't be accessed from outside of the class, even in a sub class.
  // `readonly` modifier = Prevents assignments to the field outside of the constructor.

  private readonly id: number;
  private readonly items: string[];
  private readonly total: number;
}
```

Add a `constructor()` method which accepts an order ID, an array of order items and the total value of the order:

```typescript
class Order {
  // ...

  constructor(id: number, items: string[], total: number) {
    this.id = id;
    this.items = items;
    this.total = total;
  }
}
```

Create a new order instance and test that our class is working correctly:

```typescript
const order = new Order(1, ["Shoes", "Shirt", "Pants"], 100);

console.log({ order });
```

Run the script:

```bash
npx tsx ship-it.ts
```

Add a method to that we can use to describe the order:

```typescript
class Order {
  // ...

  describeOrder(): string {
    return `\n[  ] Order #${this.id}\n\nItems: ${this.items.join(
      ", "
    )}\nTotal: $${this.total}`;
  }
}
```

Replace the existing `console.log()` call:

```typescript
console.log(order.describeOrder());
```

Run the script:

```bash
npx tsx ship-it.ts
```

Replace the existing order and `console.log()` call with an array of orders:

```typescript
const orders = [
  new Order(1, ["T-shirt", "Jeans"], 120),
  new Order(2, ["Skirt", "Blouse", "Flats"], 200),
  new Order(3, ["Sweater", "Scarf"], 110),
  new Order(4, ["Sneakers"], 90)
];
```

Then loop through the array of orders and call the `describeOrder()` method for each order:

```typescript
for (const order of orders) {
  console.log(order.describeOrder());
}
```

Run the script:

```bash
npx tsx ship-it.ts
```

## Refactor the order class to use property parameters

Delete the existing field declarations in the `Order` class:

```diff
-private readonly id: number;
-private readonly items: string[];
-private readonly total: number;
```

Refactor the `constructor()` method to use property parameters:

```typescript
class Order {
  // ...

  constructor(
    private readonly id: number,
    private readonly items: string[],
    private readonly total: number
  ) {}
}
```

Run the script to check that everything still works correctly:

```bash
npx tsx ship-it.ts
```

## Create a class which extends the `Order` and stores more information

```typescript
// This class will inherit all of the fields and methods in the `Order` class.
class OrderWithShippingDetails extends Order {

  constructor(
    id: number,
    items: string[],
    total: number,
    // Property parameter.
    private readonly address: string
  ) {
    // Calling `super()` will call the parent class' constructor.
    // Passing through the values which are stored by the `Order` class.
    // Must be called before using `this` anywhere.
    super(id, items, total);
  }

}
```

Update the `orders` array:

1. Replace all instances of `new Order` with `new OrderWithShippingDetails`.
2. Add an argument to each of the `new OrderWithShippingDetails(...)` calls which contains an address for the order (type: `string`).

> **Example addresses**
>
> - 123 Elm St, Springfield, IL, 62704
> - 456 Maple Ave, Anytown, CA, 90210
> - 789 Oak Dr, Smallville, KS, 66002
> - 101 Pine Ln, Metropolis, NY, 10001

Each order in the `orders` array should now look similar to this:

```typescript
new Order(1, ["T-shirt", "Jeans"], 120, "123 Elm St, Springfield, IL, 62704")
```

Run the script:

```bash
npx tsx ship-it.ts
```

The orders are still being constructed correctly, but we're not outputting the address anywhere.
Let's fix that by adding a `describeOrder()` method in our `OrderWithShippingDetails` class:

```typescript
class OrderWithShippingDetails extends Order {
  // ...

  // When `noImplicitOverride` is set to `true` in `tsconfig.json`,
  // need to use `override` modifier when overwriting function from the base class .
  override describeOrder(): string {
    return `${super.describeOrder()}\n\nShip to: ${this.address}\n\n----`;
  }

}
```

Run the script:

```bash
npx tsx ship-it.ts
```

## Make the `OrderWithShippingDetails` class generic so it can support different types of address values

The order data we're using is provided by an internal order API. A new order API is being
developed by another team in the company: it stores addresses as a structured object,
but the legacy order API stores addresses as strings.

Refactor `OrderWithShippingDetails` class to be generic and allow for the different types of address:

```diff
-class OrderWithShippingDetails extends Order {
+class OrderWithShippingDetails<AddressType> extends Order {
   constructor(
     id: number,
     items: string[],
     total: number,
-    private readonly address: string
+    private readonly address: AddressType
   ) {
     super(id, items, total);
   }
 }
```

Update a couple of the orders to use the new address structure, for example:

```typescript
new OrderWithShippingDetails(1, ["T-shirt", "Jeans"], 120, { street: "123 Elm St", city: "Springfield", state: "IL", postalCode: "62704" })

new OrderWithShippingDetails(4, ["Sneakers"], 90, { street: "456 Maple Ave", city: "Anytown", state: "CA", postalCode: "90210" })
```

Hover over the `OrderWithShippingDetails` and notice the different types.

Notice how the `AddressType` type argument is inferred from the value of the constructor's `address` argument.

Instead of leaving TypeScript to infer the `AddressType` type argument, we can specify the type by explicitly passing a type argument. This ensures we have type safety in the address value we're passing to the `OrderWithShippingDetails` class constructor.

Create an `Address` object type:

```typescript
type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
};
```

Add a type argument to the `new OrderWithShippingDetails()` calls where an address object is being passed:

```typescript
new OrderWithShippingDetails<Address>(...)
```

Run the script:

```bash
npx tsx ship-it.ts
```

Notice `Ship to: [object Object]` being output for orders where the `address` is an object.

Refactor the `describeOrder()` method to correctly handle when the address is as string and when the address is an object:

```typescript
class OrderWithShippingDetails<AddressType> extends Order {
  // ...

  override describeOrder(): string {
    let address;

    if (typeof this.address === "string") {
      address = this.address;
    } else {
      // Error: No overload matches this call.
      address = Object.entries(this.address)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");
    }

    return `${super.describeOrder()}\n\nShip to:\n${address}\n\n----`;
  }

}
```

The type parameter `AddressType` currently allows for any type.

See what happens if you pass the number `123` as an address value, instead of a string or an object.

Fix this by restricting the types that can be passed as an argument for the `AddressType` type parameter.

Add a generic constraint to the type parameter for the `OrderWithShippingDetails` class:

```typescript
class OrderWithShippingDetails<AddressType extends string | Record<string, string>> extends Order {}
```

Run the script:

```bash
npx tsx ship-it.ts
```
