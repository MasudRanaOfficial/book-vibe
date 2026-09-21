"use client";

import { BooksContext } from "@/app/context/BooksContext";
import { BookType } from "@/app/types/book-types";
import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Figma-accurate palette for the triangle bars
const colors = [
  "#0052FF",
  "#00F0BC",
  "#FFC107",
  "#FF8042",
  "#FB0100",
  "#FC3CFF",
  "#4F46E5",
];

// Custom shape generating the triangle / bell bar from the design
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${
    x + width / 2
  },${y + height / 3} ${x + width / 2}, ${y} C${x + width / 2},${
    y + height / 3
  } ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height} Z`;
};

interface TriangleBarProps {
  fill?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

const TriangleBar = (props: TriangleBarProps) => {
  const { fill, x = 0, y = 0, width = 0, height = 0 } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      name: string;
      pages: number;
    };
  }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md">
        <p className="font-serif font-bold text-slate-800 text-sm">
          {payload[0].payload.name}
        </p>
        <p className="text-xs text-slate-500 mt-0.5">
          Pages:{" "}
          <span className="font-semibold text-emerald-600">
            {payload[0].payload.pages}
          </span>
        </p>
      </div>
    );
  }
  return null;
};

const ReadBooks = () => {
  const { readBooks = [] } = useContext(BooksContext);

  const data = readBooks.map((book: BookType) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <section className="container mx-auto px-4 py-8 md:py-14 max-w-6xl">
      <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-10 md:p-14 shadow-sm">
        {readBooks.length > 0 ? (
          <div className="w-full h-112.5 sm:h-130">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  left: -10,
                  bottom: 60,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E2E8F0"
                />

                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={{ stroke: "#CBD5E1" }}
                  interval={0}
                  tick={({ x, y, payload }) => (
                    <g transform={`translate(${x},${y})`}>
                      <text
                        x={0}
                        y={0}
                        dy={14}
                        textAnchor="end"
                        fill="#64748B"
                        className="text-[11px] sm:text-xs font-medium"
                        transform="rotate(-25)"
                      >
                        {payload.value.length > 15
                          ? `${payload.value.substring(0, 15)}...`
                          : payload.value}
                      </text>
                    </g>
                  )}
                />

                <YAxis
                  tickLine={false}
                  axisLine={{ stroke: "#CBD5E1" }}
                  tick={{ fill: "#64748B", fontSize: 12 }}
                />

                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "transparent" }}
                />

                <Bar
                  dataKey="pages"
                  shape={<TriangleBar />}
                  label={{
                    position: "top",
                    fill: "#334155",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {data.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="py-20 text-center">
            <svg
              className="mx-auto h-12 w-12 text-slate-300 mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
            <h3 className="text-xl font-bold font-serif text-slate-800">
              No read books to display
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Read books will generate page statistics here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReadBooks;
