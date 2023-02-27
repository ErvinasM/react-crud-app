type ProductModel = {
  id: string,
  title: string,
  body: string,
  images: string[],
  price: string,
  category: string,
  inventory: string,
};

type CategoryModel = {
  [key: string]: number;
};
