import Image from "next/image";
import React from "react";
import HeroBanner from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto my-10">
      <div className="grid grid-cols-2 gap-4 items-center bg-slate-100 rounded-3xl p-20">
        <div className="space-y-4">
          <h2 className="font-bold text-5xl">
            Books to freshen up <br /> your bookshelf
          </h2>
          <button className="btn btn-success">View The List</button>
        </div>
        <div>
          <Image src={HeroBanner} alt="Banner Image"></Image>
        </div>
      </div>
    </section>
  );
};

export default Banner;
