import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";

const BookCard = ({ book }) => {
  return (
    <Card className="border max-w-75 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-0 overflow-hidden">
        <div className="relative w-full aspect-square">
          <Image
          src={book.image_url}
          alt={book.title || "Book Cover"}
        //   width={0}
        //   height={0}
        //   sizes="100vw"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-xl object-cover"
        />
        <Chip size="sm" className="absolute right-2 top-2">{book.category}</Chip>
        </div>
      </div>

      <div className="p-4 gap-1.5">
        <h2 className="text-md font-semibold text-slate-900 line-clamp-1">
          {book.title}
        </h2>
        
        <p className="text-xs text-slate-500 font-medium">
          By {book.author}
        </p>

        <p className="text-sm text-slate-600 line-clamp-2 mt-1">
          {book.description}
        </p>
      </div>

      <div className="px-4 pb-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-0.5 text-slate-600 text-sm">
          <CiStar className="text-lg text-primary text-orange-500" />
          <span>{book.rating}</span>
        </div>

        <div className="text-sm font-medium text-slate-800 bg-green-300 px-2.5 py-0.5 rounded-full">
          In stock: {book.available_quantity}
        </div>
      </div>

      <Link href={`/all-books/${book.id}`}><Button variant="outline" className={'w-full'}>View Details</Button></Link>
    </Card>
  );
};

export default BookCard;