"use client";

import Link from "next/link";
import { useContext } from "react"; 
import BookCard from "@/app/components/shared/BookCard";
import { BooksContext } from "@/app/context/BooksContext";

const ListedBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    return null;
  }

  const { readBooks } = context;

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="mb-8 text-center font-serif text-4xl font-bold text-slate-900">
        Listed Books
      </h2>

      {readBooks.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-600">
          No books have been marked as read yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {readBooks.map((book) => (
            <Link
              key={book.bookId}
              href={`/books/${book.bookId}`}
              className="block h-full transition-transform duration-200 hover:-translate-y-1 focus:outline-none"
            >
              <BookCard book={book} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default ListedBooks;
