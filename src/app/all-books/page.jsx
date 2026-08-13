import BookCard from "@/components/BookCard";
import Category from "@/components/Category";

const AllBooksPage = async({searchParams}) => {
    const {category}=await searchParams;
    // console.log(category);

    const res=await fetch('https://a08-book-library.vercel.app/data.json')
    const books=await res.json()
    // console.log(books)

    const filteredBooks= category ? books.filter(book=>book.category.toLowerCase() == category.toLowerCase()) : books

    return (
        <div className="mb-15">
            <h1 className="text-2xl font-bold mx-8 my-6">All Books</h1>

            <Category />
            <div className="grid grid-cols-4 gap-5 px-6">
                {
                    filteredBooks.map(book=> <BookCard key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooksPage;