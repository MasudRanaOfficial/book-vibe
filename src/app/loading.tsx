import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      {/* Pulsing Book Icon */}
      <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 shadow-sm animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      </div>

      <div className="text-center space-y-1">
        <p className="font-serif font-bold text-slate-800 text-lg">
          Loading Books...
        </p>
        <p className="text-slate-500 text-xs">
          Fetching the latest recommendations for you
        </p>
      </div>
    </div>
  );
}
