"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BooksContext } from "@/app/context/BooksContext";
import type { BookType } from "@/app/types/book-types";

const fallbackBooks: BookType[] = [
  {
    bookId: 1,
    bookName: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: "https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png",
    review: "",
    totalPages: 224,
    rating: 4.3,
    category: "Fiction",
    tags: ["Young Adult", "Identity"],
    publisher: "Little, Brown and Company",
    yearOfPublishing: 1951,
  },
  {
    bookId: 2,
    bookName: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: "https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png",
    review: "",
    totalPages: 224,
    rating: 4.3,
    category: "Fiction",
    tags: ["Young Adult", "Identity"],
    publisher: "Little, Brown and Company",
    yearOfPublishing: 1951,
  },
  {
    bookId: 3,
    bookName: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: "https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png",
    review: "",
    totalPages: 224,
    rating: 4.3,
    category: "Fiction",
    tags: ["Young Adult", "Identity"],
    publisher: "Little, Brown and Company",
    yearOfPublishing: 1951,
  },
  {
    bookId: 4,
    bookName: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: "https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png",
    review: "",
    totalPages: 224,
    rating: 4.3,
    category: "Fiction",
    tags: ["Young Adult", "Identity"],
    publisher: "Little, Brown and Company",
    yearOfPublishing: 1951,
  },
  {
    bookId: 5,
    bookName: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: "https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png",
    review: "",
    totalPages: 224,
    rating: 4.3,
    category: "Fiction",
    tags: ["Young Adult", "Identity"],
    publisher: "Little, Brown and Company",
    yearOfPublishing: 1951,
  },
];

const ListedBooks = () => {
  const context = useContext(BooksContext);

  const booksToShow =
    context && context.readBooks.length > 0 ? context.readBooks : fallbackBooks;

  return (
    <div className="min-h-screen bg-[#efefef] px-4 py-6 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <header className="rounded-sm border border-slate-200 bg-[#f0f0f0] px-4 py-5 shadow-sm">
          <h1 className="text-center text-3xl font-black tracking-tight text-slate-800">
            Books
          </h1>
        </header>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md bg-[#2ea76d] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#279861]"
          >
            Sort By
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-md border border-slate-200 bg-white">
          <div className="flex border-b border-slate-200 bg-[#f9f9f9]">
            <button
              type="button"
              className="border-b-2 border-[#2ea76d] px-5 py-3 text-sm font-semibold text-[#2b7d5c]"
            >
              Read Books
            </button>
            <button
              type="button"
              className="px-5 py-3 text-sm font-medium text-slate-500"
            >
              WishList Books
            </button>
          </div>

          <div className="space-y-5 bg-white p-4">
            {booksToShow.map((book) => (
              <Link
                key={book.bookId}
                href={`/books/${book.bookId}`}
                className="block transition-transform duration-200 hover:-translate-y-0.5"
              >
                <article className="flex gap-5 rounded-xl border border-slate-200 bg-[#fafafa] p-4 shadow-sm">
                  <div className="relative h-40 w-28 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      fill
                      sizes="112px"
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h2 className="text-2xl font-black tracking-tight text-slate-900">
                          {book.bookName}
                        </h2>

                        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                          <span className="font-medium">By :</span>
                          <span className="font-semibold text-slate-800">
                            {book.author}
                          </span>
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                          {book.tags.map((tag) => (
                            <span
                              key={`${book.bookId}-${tag}`}
                              className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600"
                            >
                              {tag}
                            </span>
                          ))}

                          <span className="inline-flex items-center gap-1.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="h-3.5 w-3.5"
                            >
                              <path d="M5.5 2.75a.75.75 0 0 0-1.5 0v.7A2.75 2.75 0 0 0 2.75 6.25V8.5a2.75 2.75 0 0 0 2.75 2.75h1.5v2.5a.75.75 0 0 0 1.5 0v-2.5h1.5A2.75 2.75 0 0 0 12.75 8.5V6.25A2.75 2.75 0 0 0 10 3.5v-.75a.75.75 0 0 0-1.5 0v.75h-3V2.75Zm1.5 3.5h3.5a1.25 1.25 0 0 1 1.25 1.25V8.5a1.25 1.25 0 0 1-1.25 1.25h-3.5A1.25 1.25 0 0 1 5.75 8.5V7.5A1.25 1.25 0 0 1 7 6.25Z" />
                            </svg>
                            {book.publisher}
                          </span>

                          <span className="inline-flex items-center gap-1.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="h-3.5 w-3.5"
                            >
                              <path d="M10 2.5a.75.75 0 0 1 .75.75v8.7l2.98 2.98a.75.75 0 1 1-1.06 1.06L9.25 14.3V3.25A.75.75 0 0 1 10 2.5Z" />
                            </svg>
                            {book.totalPages} pages
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-slate-200 pt-3">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-[#e7f8ef] px-2.5 py-1 text-xs font-medium text-[#2b7d5c]">
                          Category: {book.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff7ed] px-2.5 py-1 text-xs font-medium text-[#a16207]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-3.5 w-3.5"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118L10 18.17l-2.8 2.034c-.784.57-1.839-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.567 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 0 0 .95-.69l1.07-3.292Z" />
                          </svg>
                          {book.rating.toFixed(1)}
                        </span>
                      </div>

                      <button
                        type="button"
                        className="rounded-md bg-[#2ea76d] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#279861]"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
