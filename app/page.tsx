import ProductList from "./components/ProductList";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="w-full flex justify-center h-72">
        <button>Shop Now</button>
      </div>
      <ProductList />
    </main>
  );
}
