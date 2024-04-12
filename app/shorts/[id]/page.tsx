import React from "react";
import ProductPage from "@/app/components/ProductPage";




const getShort = async (id: string) => {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/products/records/${id}`
  );

  const short = await res.json();
  return short;
};

const Product = async ({ params }: any) => {
  const short = await getShort(params.id);
  return (
    <>
    <ProductPage name={short.name} price={short.price} image={short.image} />>
   </>
  );
};

export default Product;
