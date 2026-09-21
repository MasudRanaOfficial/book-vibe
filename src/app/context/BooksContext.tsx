"use client";
import React, { createContext, ReactNode, useState } from "react";
import { BookType } from "@/app/types/book-types";

interface BooksContextType {
  readBooks: BookType[];
  setReadBooks: React.Dispatch<React.SetStateAction<BookType[]>>;
  wishlist: BookType[];
  setWishlist: React.Dispatch<React.SetStateAction<BookType[]>>;
}

const defaultBooksContext: BooksContextType = {
  readBooks: [],
  setReadBooks: () => undefined,
  wishlist: [],
  setWishlist: () => undefined,
};

export const BooksContext =
  createContext<BooksContextType>(defaultBooksContext);

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<BookType[]>([]);
  const [wishlist, setWishlist] = useState<BookType[]>([]);

  const sharedData: BooksContextType = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
