import React from "react";
import type { BookType } from "@/app/types/book-types";
import BookCard from "@/app/components/shared/BookCard";

const getData = async () => {
  const res = await fetch("http://localhost:3000/data/booksData.json");
  const data = await res.json();
  return data;
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
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </section>
  );
};

export default Books;
