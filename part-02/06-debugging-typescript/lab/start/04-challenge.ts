type Product = {
  name: string;
  price: number;
  category: string;
};

const products: Product[] = [
  {
    name: "Bananas",
    price: 1,
    category: "produce",
  },
  {
    name: "Bread",
    price: 3,
    category: "bakery",
  },
  {
    name: "Tofu",
    price: 2,
    category: "protein",
  },
];

for (const product of products) {
  product.inStock = false;
}
