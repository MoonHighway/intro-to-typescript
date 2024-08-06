// -- Variable type isn't compatible with function return type --
{
  // -- Error --
  {
    function getCount(): number {
      return 186;
    }

    // Error: Type 'number' is not assignable to type 'string'. TS2322.
    const result: string = getCount();

    console.log(result);
  }

  // -- Fix --
  {
    function getCount(): number {
      return 186;
    }

    const result: number = getCount();

    console.log(result);
  }
}

// -- Type of object property value isn't compatible with type specified in object type --
{
  // -- Error --
  {
    type Product = {
      id: number;
      name: string;
    }

    // Error: Type 'number' is not assignable to type 'string'. TS2322.
    const item: Product = {
      id: 1,
      name: 48,
    };

    console.log(item);
  }

  // -- Fix --
  {
    type Product = {
      id: number;
      name: string;
    }

    const item: Product = {
      id: 1,
      name: "Plastic tree",
    };

    console.log(item);
  }
}

// -- Type of object property value isn't compatible with type specified in object type (type literal) --
{
  // -- Error --
  {
    type Product = {
      id: number;
      name: string;
      category: "home" | "office";
    }

    const item: Product = {
      id: 1,
      name: "Plastic tree",
      // Error: Type '"hom"' is not assignable to type '"home" | "office"'. Did you mean '"home"'? TS2820.
      category: "hom"
    };

    console.log(item);
  }

  // -- Fix --
  {
    type Product = {
      id: number;
      name: string;
      category: "home" | "office";
    }

    const item: Product = {
      id: 1,
      name: "Plastic tree",
      category: "home"
    };

    console.log(item);
  }
}
