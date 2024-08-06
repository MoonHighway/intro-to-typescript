type Schema = {
  type: "string" | "number" | "boolean" | "object";
  properties?: {
    [key: string]: Schema;
  };
};

function validate(schema: Schema, data: Record<string, any>) {
  // Validation logic here
}

// -- Error: Type 'string' is not assignable to type '"string" | "number" | "object"'. TS2345. --
{
  const schema = {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      age: {
        type: "number",
      },
    },
  };

  validate(schema, {
    name: "Amar",
    age: 64,
  });
}

// -- Fix 1: Apply `as const` to the whole `schema` object --
{
  // Caveat: This object is now immutable.
  const schema = {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      age: {
        type: "number",
      },
    },
  } as const;

  validate(schema, {
    name: "Amar",
    age: 64,
  });
}

// -- Fix 2: Apply `as const` to the `type` properties --
{
  const schema = {
    type: "object" as const,
    properties: {
      name: {
        type: "string" as const,
      },
      age: {
        type: "number" as const,
      },
    },
  };

  validate(schema, {
    name: "Amar",
    age: 64,
  });
}

// -- Fix 3: Inline the schema object and pass it directly to the `validate` function --
{
  validate(
    {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        age: {
          type: "number",
        },
      },
    },
    {
      name: "Amar",
      age: 64,
    }
  );
}
