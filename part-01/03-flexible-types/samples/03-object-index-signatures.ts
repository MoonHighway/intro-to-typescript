// -- Object index signatures --
{
  type CountryStats = {
    name: string;
    /**
     * This index signature doesn't allow for defined members to have a
     * type other than `number`.
     */
    // [key: string]: number;
    /**
     * This index signature allows for `name` to be a `string` and any
     * other properties to have a tyoe of `number` or `string`.
     */
    // [key: string]: number | string;
  };

  const stats: CountryStats = {
    name: "New Zealand",
  };

  // These properties are not allowed because they don't exist in the `CountryStats` type.
  // Add an index signature above to allow them.
  stats.population = 5_135_300;
  stats.area = 268_021;
}

// -- Interface with an object index signature --
{
  interface CloudProvider {
    name: string;
    [key: string]: string | number | boolean;
  }

  const provider1: CloudProvider = {
    name: "AWS",
    region: "us-east-1",
    services: 200,
  };

  const provider2: CloudProvider = {
    name: "GCP",
    region: "us-central1",
    services: 150,
    freeTier: true,
  };
}
