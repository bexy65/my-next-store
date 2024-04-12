import React from "react";
import ProductPage from "@/app/components/ProductPage";

const getBoot = async (id: string) => {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/products/records/${id}`
  );

  const boot = await res.json();
  return boot;
};

const Product = async ({ params }: any) => {
  const boot = await getBoot(params.id);
  return (
    <>
      <ProductPage name={boot.name} price={boot.price} image={boot.image} />
    </>
  );
};

export default Product;
