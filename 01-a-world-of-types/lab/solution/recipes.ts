// -- SOLUTION --

type Recipe = {
  name: string;
  for: string;
  vegetarian: boolean;
  ingredients?: string[];
  steps?: string[];
  timings?: {
    prep: number;
    cook: number;
    total: number;
  };
};

const recipe1: Recipe = {
  name: "Pancakes",
  for: "breakfast",
  vegetarian: true,
};

const recipe2: Recipe = {
  name: "Spaghetti Bolognese",
  for: "dinner",
  vegetarian: false,
};

// -- Recipe ingredients and steps --

recipe1.ingredients = [
  "1 cup flour",
  "1 cup milk",
  "1 egg",
  "1 tbsp sugar",
  "1 tbsp baking powder",
  "1 tsp salt",
];

recipe1.steps = [
  "Mix dry ingredients",
  "Add wet ingredients",
  "Mix until smooth",
  "Cook on medium heat until bubbles form",
  "Flip and cook for another minute",
  "Serve with butter and syrup",
];

recipe2.ingredients = [
  "1 lb spaghetti",
  "1 jar marinara sauce",
  "1 lb ground beef",
  "1 onion",
  "2 cloves garlic",
  "1 tsp salt",
  "1 tsp pepper",
];

recipe2.steps = [
  "Cook spaghetti according to package directions",
  "Brown ground beef in a large skillet",
  "Add onion and garlic and cook until soft",
  "Add marinara sauce and seasonings",
  "Simmer for 10 minutes",
  "Serve over spaghetti",
];

// -- Recipe timings --

recipe1.timings = {
  prep: 10,
  cook: 10,
  total: 20,
};

recipe2.timings = {
  prep: 10,
  cook: 20,
  total: 30,
};

// -- Display recipes --

type Recipes = Recipe[];

const recipes: Recipes = [recipe1, recipe2];

for (const recipe of recipes) {
  console.log(recipe.name);
  console.log("For: " + recipe.for);
  console.log(recipe.vegetarian ? "Vegetarian" : "Not vegetarian");
  console.log(
    "Timings: " +
      recipe.timings?.prep +
      " minutes prep, " +
      recipe.timings?.cook +
      " minutes cook, " +
      recipe.timings?.total +
      " minutes total"
  );
  console.log("Ingredients: " + recipe.ingredients?.join(", "));
  console.log("Steps: " + recipe.steps?.join(", "));
  console.log("----");
}
