import Image from "next/image";
import { Chip } from "@heroui/react";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);
  const res = await fetch("https://a08-book-library.vercel.app/data.json");
  const books = await res.json();
  // console.log(books)
  const book = books.find((p) => p.id == id);
  // console.log(book)

  return (
    <div className="bg-slate-50 min-h-screen py-18 px-6 md:px-12 flex items-center justify-center">
        <div className="w-full max-w-5xl bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-lg flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
         
          <div className="w-full md:w-1/2 lg:w-5/12 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[2/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <Image
                src={book?.image_url}
                alt={book?.title || "Book Cover"}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                priority
              />
              <Chip size="sm" className="absolute right-2 top-2">{book.category}</Chip>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col justify-between space-y-6">
            <div>
              <h1 className="text-2xl md:text-4xl font-extrabold text-slate-700 tracking-tight">
                {book?.title}
              </h1>
              <p className="text-sm md:text-base font-semibold text-pink-600 mt-2">
                By {book?.author}
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-4">
                {book?.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                <span className="inline-block text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">
                  {book?.available_quantity} copies left
                </span>
              </div>
              <div>
                <span className="inline-block text-xs font-semibold text-red-600 bg-slate-100 border border-slate-300 px-3 py-1.5 rounded-full">
                  Price: {book?.price}
                </span>
              </div>
              </div>

              <button className="w-full  px-8 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:opacity-95 transition-all shadow-md shadow-pink-500/20 active:scale-[0.99]">
                Borrow This Book
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default BookDetailsPage;
