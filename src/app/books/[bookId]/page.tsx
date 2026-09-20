import ReadButton from "@/app/components/bookDetails/ReadButton";
import WishlistButton from "@/app/components/bookDetails/WishListButton";
import { getData } from "@/app/components/homepage/Books";
import { BookType } from "@/app/types/book-types";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export interface BookDetailProps {
  params: Promise<{ bookId: string }>;
}

const BookDetailPage = async ({ params }: BookDetailProps) => {
  const { bookId } = await params;

  const books: BookType[] = await getData();
  const book = books.find((book) => String(book.bookId) === String(bookId));

  if (!book) {
    notFound();
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <section className="container mx-auto px-4 py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Book Cover Image Box */}
        <div className="flex items-center justify-center rounded-3xl bg-slate-100/90 p-8 sm:p-14 min-h-115 lg:min-h-145">
          <div className="relative w-56 sm:w-64 h-80 sm:h-96 drop-shadow-2xl">
            <Image
              src={image}
              alt={bookName}
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-contain"
            />
          </div>
        </div>

        {/* Right: Book Details */}
        <div className="flex flex-col space-y-4">
          {/* Title & Author */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 leading-tight">
              {bookName}
            </h1>
            <p className="mt-2 text-base text-slate-600 font-medium">
              By : <span className="text-slate-800">{author}</span>
            </p>
          </div>

          <hr className="border-slate-200" />

          {/* Category */}
          <div className="text-slate-700 font-medium text-base">{category}</div>

          <hr className="border-slate-200" />

          {/* Review */}
          <p className="text-sm leading-relaxed text-slate-600">
            <strong className="text-slate-900 font-bold">Review : </strong>
            {review}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-3 pt-2">
            <span className="font-bold text-slate-900 text-sm">Tag</span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold text-emerald-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* Metadata Table-style List */}
          <div className="space-y-3 pt-1 text-sm">
            <div className="grid grid-cols-2 max-w-xs">
              <span className="text-slate-500">Number of Pages:</span>
              <span className="font-bold text-slate-900">{totalPages}</span>
            </div>
            <div className="grid grid-cols-2 max-w-xs">
              <span className="text-slate-500">Publisher:</span>
              <span className="font-bold text-slate-900">{publisher}</span>
            </div>
            <div className="grid grid-cols-2 max-w-xs">
              <span className="text-slate-500">Year of Publishing:</span>
              <span className="font-bold text-slate-900">
                {yearOfPublishing}
              </span>
            </div>
            <div className="grid grid-cols-2 max-w-xs">
              <span className="text-slate-500">Rating:</span>
              <span className="font-bold text-slate-900">{rating}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <ReadButton book={book}></ReadButton>
            <WishlistButton book={book}></WishlistButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailPage;
