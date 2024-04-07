import Link from "next/link";
import React from "react";
import PocketBase from "pocketbase";

const db = new PocketBase("http://127.0.0.1:8090");

interface Category {
  name: string;
  description: string;
}

interface CategoryData {
  items: Category[];
}

async function fetchCategories(): Promise<Category[]> {
  const data: CategoryData = await db.collection("category").getList();
  return data.items;
}

const NavbarCategories = async () => {
  const productCategories: Category[] = await fetchCategories();

  return (
    <ul className="flex flex-col md:flex-row p-2 justify-center text-center ">
      {productCategories?.map((e: Category, index: number) => (
        <button key={index} className="p-1 md:mx-4 text-start">
          <Link href={`/${e.name.toLowerCase()}`}>{e.name.toUpperCase()}</Link>
        </button>
      ))}
    </ul>
  );
};

export default NavbarCategories;
