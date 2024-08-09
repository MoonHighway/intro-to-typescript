// -- Error: 'X' is possibly 'null' --
{
  function getItemById(id: number) {
    if (id === 1) {
      return {
        id: 1,
        name: "Item 1",
      };
    }

    return null;
  }

  const item = getItemById(1);

  // Error: 'item' is possibly 'null'. TS18047.
  console.log(item.name);
}

// -- Fix error "is possibly null": Use optional chaining --
{
  function getItemById(id: number) {
    if (id === 1) {
      return {
        id: 1,
        name: "Item 1",
      };
    }

    return null;
  }

  const item = getItemById(1);

  console.log(item?.name);
}

// -- Fix error "is possibly null": Narrow the type with a type guard --
{
  function getItemById(id: number) {
    if (id === 1) {
      return {
        id: 1,
        name: "Item 1",
      };
    }

    return null;
  }

  const item = getItemById(1);

  if (item !== null) {
    console.log(item.name);
  }
}

// -- Fix error "is possibly null": Non-null assertion operator (unsafe) --
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-
{
  function getItemById(id: number) {
    if (id === 1) {
      return {
        id: 1,
        name: "Item 1",
      };
    }

    return null;
  }

  const item = getItemById(1);

  console.log(item!.name);
}
