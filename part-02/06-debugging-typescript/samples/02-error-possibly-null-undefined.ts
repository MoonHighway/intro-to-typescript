// -- Possibly null --
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

  console.log(item.name);
}

// -- Possibly undefined --
{
  // TODO
}
