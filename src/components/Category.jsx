import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async ({ searchParams }) => {
  const res = await fetch('https://a08-book-library.vercel.app/category.json');
  const rawCategories = await res.json();

  const categories = rawCategories.filter((cat, index, self) =>
    index === self.findIndex((c) => c.name.toLowerCase() === cat.name.toLowerCase())
  );

  const resolvedParams = searchParams ? await searchParams : {};
  const currentCategory = resolvedParams?.category;

  const isAllActive = !currentCategory || currentCategory === 'all';

  return (
    <div className="bg-slate-100/90 p-4 rounded-2xl border border-pink-500/20 shadow-xl w-full max-w-xs">
      <h2 className="text-xl font-bold mb-4 px-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500">
        Categories
      </h2>

      <div className="flex flex-col gap-2">
        <Link href="/all-books">
          <Button 
            className={`w-full justify-start text-left font-semibold transition-all rounded-xl ${
              isAllActive
                ? "text-white bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 shadow-md shadow-pink-500/20"
                : "text-slate-600 hover:text-slate-800 hover:bg-gradient-to-r hover:from-pink-500/20 hover:via-purple-500/20 hover:to-rose-500/20"
            }`}
            variant={isAllActive ? "solid" : "light"}
          >
            All Categories
          </Button>
        </Link>

        {categories.map((category) => {
          const categorySlug = category.name.toLowerCase();
          const isActive = currentCategory === categorySlug;

          return (
            <Link key={category.id} href={`?category=${categorySlug}`}>
              <Button 
                variant={isActive ? "solid" : "light"}
                className={`w-full justify-start text-left font-medium transition-all rounded-xl ${
                  isActive
                    ? "text-white bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 shadow-md shadow-pink-500/20"
                    : "text-slate-600 hover:text-slate-800 hover:bg-gradient-to-r hover:from-pink-500/20 hover:via-purple-500/20 hover:to-rose-500/20"
                }`}
              >
                {category.name}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;