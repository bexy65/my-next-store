import React from "react";
import PocketBase from "pocketbase";
const db = new PocketBase("http://127.0.0.1:8090");

// const getBoots = async (id: string) => {
//   const result = await db.collection("products").getList(1, 20, {
//     filter: `id === ${id}`,
//   });
// };

const getShirt = async (id: string) => {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/products/records/${id}`
  );

  const shirt = await res.json();
  return shirt;
};

const ProductPage = async ({ params }: any) => {
  const shirt = await getShirt(params.id);
  return (
    <div className="product-page flex flex-col md:flex-row text-center w-full p-4 rounded-xl">
      <div className="h-1/2 md:w-1/2 md:h-full flex flex-col justify-center mb-4">
        <h1 className="my-2">{shirt.name}</h1>
        <img src={`${shirt.image}`} alt="Image" className="h-3/4" />
      </div>
      <div className="h-1/2 md:w-1/2 md:h-full flex flex-col justify-around content-center text-center mg-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          necessitatibus perspiciatis itaque cum rem optio neque et excepturi
          ullam eos placeat saepe officiis nulla, eveniet porro facere commodi,
          quibusdam recusandae.
        </p>
        <p className="text-2xl">{shirt.price}$</p>
        <button>Add to card</button>
      </div>
    </div>
  );
};

export default ProductPage;
