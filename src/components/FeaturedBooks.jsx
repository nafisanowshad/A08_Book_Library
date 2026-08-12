import BookCard from "./BookCard";

const FeaturedBooks = async () => {
  const res = await fetch("https://a08-book-library.vercel.app/data.json");
  const books = await res.json();
  // console.log(books)

  const topBooks = books.slice(3, 7);
  // console.log(topBooks)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 my-6 mt-10 md:mt-14 text-center sm:text-left">
    Featured Books
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
    {topBooks.map((book) => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>
</div>
  );
};

export default FeaturedBooks;
