// `typeof` type operator
{
  const city1 = {
    name: 'Istanbul',
    country: 'Turkey'
  };

  type CityWithPopulation = typeof city1;

  const city2: CityWithPopulation = {
    name: 'Amsterdam',
    country: 'Netherlands'
  };
}
