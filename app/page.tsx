export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="w-full bg-blue-300">Hero container</div>
      <div>
        <div className="w-full sm:w-80 md:w-4/5 lg:w-3/4 xl:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"></div>
      </div>
    </main>
  );
}
