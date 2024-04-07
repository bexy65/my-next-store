import React from "react";
import PocketBase from "pocketbase";

const db = new PocketBase("http://127.0.0.1:8090");

interface Product {
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

const Shorts = async () => {
  const products: Product[] = await fetchProducts();

  const shorts: Product[] = products.filter(
    (product) => product.expand.category.name === "pants"
  );

  return (
    <div className="flex justify-center w-full">
      <div className="w-full sm:w-80 md:w-4/5 lg:w-3/4 xl:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {shorts?.map((boot: Product, index: number) => (
          <div key={index} className="flex flex-col items-center">
            <img src={boot.image} alt="image" className="w-full h-auto" />
            <h1 className="text-m md:text-l font-bold">{boot.name}</h1>
            <p className="text-lg">${boot.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shorts;
