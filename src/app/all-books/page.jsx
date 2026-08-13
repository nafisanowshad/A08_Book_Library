import BookCard from "@/components/BookCard";
import Category from "@/components/Category";
import SearchInput from "@/components/SearchInput";

const AllBooksPage = async ({ searchParams }) => {
  const resolvedParams = searchParams ? await searchParams : {};
  const category = resolvedParams?.category;
  const searchQuery = resolvedParams?.search;

  const res = await fetch('https://a08-book-library.vercel.app/data.json');
  const books = await res.json();

  // Category & Search Filter
  let filteredBooks = books;

  if (category && category.toLowerCase() !== 'all') {
    filteredBooks = filteredBooks.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (searchQuery) {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 mb-16">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">All Books</h1>

      {/* Search Input */}
      <SearchInput />

      {/* Main Container Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        <div className="hidden lg:block lg:col-span-1 sticky top-6">
          <Category searchParams={searchParams} />
        </div>

        <div className="col-span-1 lg:col-span-3">
          <p className="text-slate-500 font-medium mb-4">
            Showing <span className="font-bold text-slate-800">{filteredBooks.length}</span> books
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllBooksPage;