import React from "react";
import type { BookType } from "@/app/types/book-types";
import BookCard from "@/app/components/shared/BookCard";
import Link from "next/link";
import booksData from "../../../public/data/booksData.json";

export const getData = async () => {
  return booksData as BookType[];
};

const Books = async () => {
  const books: BookType[] = await getData();

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center text-slate-900 mb-10 font-serif">
        Books
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Link
            key={book.bookId}
            href={`/books/${book.bookId}`}
            className="block h-full transition-transform duration-200 hover:-translate-y-1 focus:outline-none"
          >
            <BookCard book={book} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Books;
