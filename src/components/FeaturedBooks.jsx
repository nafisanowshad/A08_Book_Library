import BookCard from "./BookCard";

const FeaturedBooks = async () => {
  const res = await fetch("https://a08-book-library.vercel.app/data.json");
  const books = await res.json();
  // console.log(books)

  const topBooks = books.slice(3, 7);
  // console.log(topBooks)
  return (
    <div>
      <h1 className="text-2xl font-bold my-5 mt-15">Featured Books</h1>

      <div className="grid grid-cols-4 gap-5">
        {topBooks.map((book) => <BookCard key={book.id} book={book}/>
        //  (<div key={book.id}>{book.title}</div>)
        )}
      </div>
    </div>
  );
};

export default FeaturedBooks;
