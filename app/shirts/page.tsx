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

const fetchProducts = async (): Promise<Product[]> => {
  const products: ProductData = await db
    .collection("products")
    .getList(1, 30, { expand: "category" });
  return products.items;

  //in data there is category field based on field fetch the products, can use reduce
};

const Shirts = async () => {
  const products: Product[] = await fetchProducts();

  const shirts: Product[] = products.filter(
    (product) => product.expand.category.name === "shirts"
  );

  return (
    <div className="flex justify-center w-full">
      <div className="w-full sm:w-80 md:w-4/5 lg:w-3/4 xl:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {shirts?.map((shirt: Product, index: number) => (
          <Productcard
            id={shirt.id}
            categoryName={shirt.expand.category.name}
            index={index}
            price={shirt.price}
            name={shirt.name}
            image={shirt.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Shirts;
