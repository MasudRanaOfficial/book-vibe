"use client";

import ListedBooksCard from "@/app/components/shared/ListedBooksCard";
import { BooksContext } from "@/app/context/BooksContext";
import { BookType } from "@/app/types/book-types";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  const [activeTab, setActiveTab] = useState<"read" | "wishlist">("read");
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  // Sorting helper
  const sortBooks = (books: BookType[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <section className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
      {/* Header Banner */}
      <div className="rounded-2xl sm:rounded-3xl bg-slate-100/90 py-10 sm:py-12 text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          Listed Books
        </h1>
      </div>

      {/* Sort By Dropdown */}
      <div className="flex justify-center mb-10">
        <div className="relative inline-block">
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "rating" | "pages" | "year")
            }
            className="appearance-none bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base py-3 pl-6 pr-12 rounded-xl cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
          >
            <option value="rating" className="bg-white text-slate-800">
              Sort By: Rating
            </option>
            <option value="pages" className="bg-white text-slate-800">
              Sort By: Number of Pages
            </option>
            <option value="year" className="bg-white text-slate-800">
              Sort By: Published Year
            </option>
          </select>
          {/* Custom Chevron Arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-slate-200 mb-8">
        <div className="flex gap-2 sm:gap-4 -mb-px">
          <button
            type="button"
            onClick={() => setActiveTab("read")}
            className={`py-3 px-5 sm:px-6 text-sm sm:text-base font-semibold border-b-2 rounded-t-lg transition-all duration-150 ${
              activeTab === "read"
                ? "border-emerald-600 text-emerald-600 bg-emerald-50/40"
                : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
            }`}
          >
            Read Books ({readBooks.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("wishlist")}
            className={`py-3 px-5 sm:px-6 text-sm sm:text-base font-semibold border-b-2 rounded-t-lg transition-all duration-150 ${
              activeTab === "wishlist"
                ? "border-emerald-600 text-emerald-600 bg-emerald-50/40"
                : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
            }`}
          >
            Wishlist Books ({wishlist.length})
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div>
        {activeTab === "read" && (
          <div className="space-y-6">
            {sortedReadBooks.length > 0 ? (
              sortedReadBooks.map((book: BookType) => (
                <ListedBooksCard key={book.bookId} book={book} />
              ))
            ) : (
              <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-slate-200">
                <svg
                  className="mx-auto h-12 w-12 text-slate-300 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <p className="text-base font-medium text-slate-600">
                  No read books added yet
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Books you mark as read will show up here.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "wishlist" && (
          <div className="space-y-6">
            {sortedWishlist.length > 0 ? (
              sortedWishlist.map((book: BookType) => (
                <ListedBooksCard key={book.bookId} book={book} />
              ))
            ) : (
              <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-slate-200">
                <svg
                  className="mx-auto h-12 w-12 text-slate-300 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <p className="text-base font-medium text-slate-600">
                  No wishlist books added yet
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Books you save to your wishlist will show up here.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ListedBooks;
