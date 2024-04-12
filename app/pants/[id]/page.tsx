import React from "react";
import ProductPage from "@/app/components/ProductPage";


const getPant = async (id: string) => {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/products/records/${id}`
  );

  const pant = await res.json();
  console.log(typeof pant);
  return pant;
};

const Product = async ({ params }: any) => {
  const pant = await getPant(params.id);
  return (
   <>
    <ProductPage name={pant.name} price={pant.price} image={pant.image}/>>
   </>
  );
};

export default Product;
