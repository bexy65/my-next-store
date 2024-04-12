import React from "react";

interface Props {
  name: string;
  image: string;
  price: number;
}

const ProductPage = ({ name, image, price, ...props }: Props) => {
  return (
    <div className="product-page flex flex-col md:flex-row text-center w-full p-4 rounded-xl">
      <div className="h-1/2 md:w-1/2 md:h-full flex flex-col justify-center mb-4">
        <h1 className="my-2">{name}</h1>
        <img src={`${image}`} alt="Image" className="h-3/4" />
      </div>
      <div className="h-1/2 md:w-1/2 md:h-full flex flex-col justify-around content-center text-center mg-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          necessitatibus perspiciatis itaque cum rem optio neque et excepturi
          ullam eos placeat saepe officiis nulla, eveniet porro facere commodi,
          quibusdam recusandae.
        </p>
        <p className="text-2xl">{price}$</p>
        <button>Add to card</button>
      </div>
    </div>
  );
};

export default ProductPage;
