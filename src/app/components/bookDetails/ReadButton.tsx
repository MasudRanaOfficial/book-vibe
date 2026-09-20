"use client";

import { BooksContext } from "@/app/context/BooksContext";
import { BookType } from "@/app/types/book-types";
import { useContext } from "react";

const ReadButton = ({ book }: { book: BookType }) => {
  const context = useContext(BooksContext);

  if (!context) {
    return null;
  }

  const { readBooks, setReadBooks } = context;

  const handleReadBook = () => {
    setReadBooks((currentBooks) => {
      const alreadyRead = currentBooks.some(
        (item) => item.bookId === book.bookId,
      );
      return alreadyRead ? currentBooks : [...currentBooks, book];
    });
  };

  return (
    <button
      type="button"
      className="px-8 py-3 rounded-xl border border-slate-300 text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-colors"
      onClick={handleReadBook}
    >
      {readBooks.some((item) => item.bookId === book.bookId)
        ? "Reading"
        : "Read"}
    </button>
  );
};

export default ReadButton;
