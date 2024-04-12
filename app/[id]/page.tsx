import React from "react";
import ProductPage from "../components/ProductPage";

const getProduct = async () => {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/products/records`
  );

  const products = await res.json();
  return products;
};

const Product = async () => {
  const products = await getProduct();
  return (
    <div>
      <ProductPage
        name={products.name}
        image={products.image}
        price={products.price}
      />
    </div>
  );
};

export default Product;
