import BookCard from "@/components/BookCard";

const AllBooksPage = async() => {
    const res=await fetch('https://a08-book-library.vercel.app/data.json')
    const books=await res.json()
    console.log(books)
    return (
        <div className="mb-15">
            <h1 className="text-2xl font-bold mx-8 my-6">All Books</h1>
            <div className="grid grid-cols-4 gap-5 px-6">
                {
                    books.map(book=> <BookCard key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooksPage;