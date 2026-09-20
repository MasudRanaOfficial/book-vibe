import React from "react";
import Image from "next/image";
import type { BookType } from "@/app/types/book-types";

interface BookCardProps {
  book: BookType;
}

const BookCard = ({ book }: BookCardProps) => {
  const { bookName, author, image, category, tags, rating } = book;

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Book Image Container */}
      <div className="relative flex items-center justify-center rounded-2xl bg-slate-100 py-8 px-4 h-60">
        <div className="relative h-44 w-32 drop-shadow-lg transition-transform duration-300 hover:scale-105">
          <Image
            src={image}
            alt={bookName}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-medium text-emerald-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title & Author */}
      <div className="mt-4 grow">
        <h3 className="font-serif text-xl font-bold text-slate-900 line-clamp-1">
          {bookName}
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          By : <span className="font-medium text-slate-800">{author}</span>
        </p>
      </div>

      {/* Bottom Metadata & Rating */}
      <div className="mt-5 border-t border-dashed border-slate-200 pt-4 flex items-center justify-between text-sm text-slate-600">
        <span className="font-medium">{category}</span>

        <div className="flex items-center gap-1.5 font-medium text-slate-700">
          <span>{rating.toFixed(2)}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
