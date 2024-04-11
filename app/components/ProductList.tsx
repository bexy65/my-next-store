import React from "react";
import PocketBase from "pocketbase";
import Productcard from "../components/Productcard";

const db = new PocketBase("http://127.0.0.1:8090");

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: {
    name: string;
  };
}

interface ProductData {
  items: Product[];
}

interface Props {
  category: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const products: ProductData = await db
    .collection("products")
    .getList(1, 30, { expand: "category" });
  return products.items;
};

const ProductList = async ({ category = "", ...props }: Props) => {
  let products: Product[] = await fetchProducts();

  if (category.length > 3) {
    products = products.filter(
      (product) => product.expand.category.name === `${category}`
    );
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-full sm:w-80 md:w-4/5 lg:w-3/4 xl:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products?.map((product: Product, index: number) => (
          <Productcard
            id={product.id}
            categoryName={product.expand.category.name}
            index={index}
            price={product.price}
            name={product.name}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
