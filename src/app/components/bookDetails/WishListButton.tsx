"use client";

import { BooksContext } from "@/app/context/BooksContext";
import { BookType } from "@/app/types/book-types";
import { useContext } from "react";

const WishlistButton = ({ book }: { book: BookType }) => {
  const context = useContext(BooksContext);

  if (!context) {
    return null;
  }

  const { wishlist, setWishlist } = context;

  const handleAddToWishlist = () => {
    setWishlist((currentBooks) => {
      const alreadyRead = currentBooks.some(
        (item) => item.bookId === book.bookId,
      );
      return alreadyRead ? currentBooks : [...currentBooks, book];
    });
  };

  return (
    <button
      type="button"
      className="px-8 py-3 rounded-xl bg-[#4eb6cb] text-white font-semibold text-sm hover:bg-[#3ea0b4] transition-colors shadow-sm"
      onClick={handleAddToWishlist}
    >
      {wishlist.some((item) => item.bookId === book.bookId)
        ? "Added to Wishlist"
        : "Wishlist"}
    </button>
  );
};

export default WishlistButton;
