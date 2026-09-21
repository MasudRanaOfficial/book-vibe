import { BookType } from "@/app/types/book-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IListedBooksCardProps {
  book: BookType;
}

const ListedBooksCard = ({ book }: IListedBooksCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:shadow-md">
      {/* Book Image Container */}
      <div className="flex items-center justify-center rounded-2xl bg-slate-100 py-6 px-4 w-full sm:w-57.5 shrink-0 h-60 sm:h-auto">
        <div className="relative h-44 w-32 drop-shadow-md">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            sizes="(max-width: 640px) 100vw, 230px"
            className="object-contain"
          />
        </div>
      </div>

      {/* Book Details */}
      <div className="flex flex-1 flex-col justify-between space-y-4">
        <div>
          {/* Title */}
          <h2 className="font-serif text-2xl font-bold text-slate-900 line-clamp-1">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-2 text-sm text-slate-600 font-medium">
            By : <span className="text-slate-800">{book.author}</span>
          </p>

          {/* Tags & Year of Publishing Row */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <span className="font-bold text-slate-900">Tag</span>
            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={book.bookId}
                  className="rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Year of Publishing with Location Icon */}
            <div className="flex items-center gap-1.5 text-slate-500 ml-0 sm:ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span>Year of Publishing: {book.yearOfPublishing}</span>
            </div>
          </div>

          {/* Publisher & Page Stats Row */}
          <div className="mt-3 flex flex-wrap items-center gap-5 text-xs sm:text-sm text-slate-500">
            {/* Publisher */}
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.199l-.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              <span>Publisher: {book.publisher}</span>
            </div>

            {/* Total Pages */}
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <span>Page {book.totalPages}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-200" />

        {/* Category, Rating Pill & View Details Button */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {/* Category Chip */}
          <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-500">
            Category: {book.category}
          </span>

          {/* Rating Chip */}
          <span className="rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-500">
            Rating: {book.rating.toFixed(1)}
          </span>

          {/* View Details Button */}
          <Link
            href={`/books/${book.bookId}`}
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
