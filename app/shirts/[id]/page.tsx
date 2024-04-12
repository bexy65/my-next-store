import React from "react";
import ProductPage from "@/app/components/ProductPage";




const getShirt = async (id: string) => {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/products/records/${id}`
  );

  const shirt = await res.json();
  return shirt;
};

const Product = async ({ params }: any) => {
  const shirt = await getShirt(params.id);
  return (
   <>
    <ProductPage name={shirt.name} price={shirt.price} image={shirt.image}/>>
   </>
  );
};

export default Product;
