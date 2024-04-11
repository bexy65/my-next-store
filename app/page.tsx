import ProductList from "./components/ProductList";

export default async function Home() {
  return (
    <main className="flex min-h-screen">
      <div>
        <ProductList />
      </div>
    </main>
  );
}
