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

// -- Fix 1: Use optional chaining (JavaScript language feature) --
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

// -- Fix 2: Narrow the type with a type guard --
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

// -- Fix 3: Use the non-null assertion operator `!` (TypeScript language feature, unsafe) --
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
