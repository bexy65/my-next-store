import React from "react";
import Link from "next/link";

interface Props {
  categoryName: string;
  id: string;
  index: number;
  image: string;
  name: string;
  price: number;
}

const Productcard = ({ id, categoryName, index, image, name, price }: Props) => {
  return (
    <div key={index} className="product-grid-card flex flex-col items-center">
      <img src={image} alt="image" className="w-full h-auto" />
      <Link href={`/${categoryName}/${id}`}>
        <h1 className="text-m md:text-l font-bold">{name}</h1>
      </Link>
      <div className="flex flex-row justify-around w-full">
        <p className="text-lg">${price}</p>
        <button>Add</button>
      </div>
    </div>
  );
};

export default Productcard;
