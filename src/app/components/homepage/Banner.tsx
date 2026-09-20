import Image from "next/image";
import React from "react";
import HeroBanner from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 md:my-14">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-50 via-emerald-50/20 to-slate-100 border border-slate-200/80 shadow-sm transition-all duration-300">
        {/* Subtle decorative background glow */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-teal-150/20 blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center p-8 sm:p-12 md:p-16 lg:p-20">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200 text-emerald-800 text-xs md:text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Editor&apos;s Weekly Picks
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Books to freshen up <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">
                your bookshelf
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explore curated recommendations across bestselling fiction,
              personal growth, and captivating stories to read this season.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button className="group inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm md:text-base shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 hover:shadow-emerald-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                View The List
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>

              <button className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm md:text-base hover:bg-slate-50 hover:border-slate-300 transition-colors">
                Explore Genres
              </button>
            </div>

            {/* Mini Trust Stats */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-8 border-t border-slate-200/60 text-slate-500 text-sm">
              <div>
                <span className="font-bold text-slate-900 text-base">
                  5,000+
                </span>{" "}
                Titles
              </div>
              <div className="h-4 w-px bg-slate-300" />
              <div>
                <span className="font-bold text-slate-900 text-base">
                  4.9/5
                </span>{" "}
                Reader Rating
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none group">
              {/* Backing image shadow & card styling */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-slate-300/60 ring-1 ring-slate-900/5 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={HeroBanner}
                  alt="Curated collection of books"
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating review badge */}
              <div className="hidden sm:flex absolute -bottom-4 -left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-slate-150 items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">
                    ★
                  </div>
                  <div className="w-8 h-8 rounded-full bg-teal-500 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">
                    4.9
                  </div>
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-800">
                    Must-Read Collection
                  </p>
                  <p className="text-slate-500">Updated this week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
