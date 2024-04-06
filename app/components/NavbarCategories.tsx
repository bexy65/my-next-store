import Link from "next/link";
import React from "react";
const url: string = "https://fakestoreapi.com/products/categories";

async function fetchCategories(url: string): Promise<any> {
  const response = await fetch(url);
  const data = await response.json();
  return data as any[];
}

function clearString(str: string) {
  return str.replace(/[^\w]/g, "") as string;
}

function capitalizeFirstLetter(string: string) {
  return (string.charAt(0).toUpperCase() + string.slice(1)) as string;
}

const NavbarCategories = async () => {
  const productCategories: string[] = await fetchCategories(url);

  return (
    <ul className="flex flex-col md:flex-row p-2 justify-center text-center">
      {productCategories?.map((e: string, index: number) => (
        <button key={index} className="p-1 text-start">
          <Link href={`/${clearString(e)}`}>{capitalizeFirstLetter(e)}</Link>
        </button>
      ))}
    </ul>
  );
};

export default NavbarCategories;
