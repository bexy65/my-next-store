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

const Productcard = ({
  id,
  categoryName,
  index,
  image,
  name,
  price,
}: Props) => {
  return (
    <div
      key={index}
      className="product-grid-card flex flex-col items-center hover:scale-105 transition transition-duration:150ms hover:shadow-2xl"
    >
      <img src={image} alt="image" className="w-full h-auto" />
      <Link href={`/${categoryName}/${id}`}>
        <h1 className="text-m md:text-l font-bold">{name}</h1>
      </Link>
      <div className="flex flex-row justify-around content-center w-full my-5">
        <p className="text-lg">${price}</p>
        <button className="bg-red-300 p-2 hover:bg-red-400">Add</button>
      </div>
    </div>
  );
};

export default Productcard;
