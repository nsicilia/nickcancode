import Image from "next/image";
import React from "react";

export default function ThreeMobileImage({
  img1,
  img2,
  img3,
  alt1,
  alt2,
  alt3,
  desc1,
  desc2,
  desc3,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 md:w-3/4 m-auto pb-16 place-items-center">
      {/* Image One */}
      <div className="col-span-2 md:col-span-1">
        <div className="relative h-[80vh] w-[90vw] md:w-[20vw]">
          <Image src={img1} alt={alt1} className="object-contain" fill />
        </div>
        <p className="text-center text-white font-mono pb-8">{desc1}</p>
      </div>

      {/* Image Two */}
      <div className="col-span-2 md:col-span-1">
        <div className="relative h-[80vh] w-[90vw] md:w-[20vw]">
          <Image src={img2} alt={alt2} className="object-contain" fill />
        </div>
        <p className="text-center text-white font-mono pb-8"> {desc2} </p>
      </div>
      {/* Image Three */}
      <div className="col-span-2 md:col-span-1">
        <div className="relative h-[80vh] w-[90vw] md:w-[20vw]">
          <Image src={img3} alt={alt3} className="object-contain" fill />
        </div>
        <p className="text-center text-white font-mono pb-8">{desc3}</p>
      </div>
    </div>
  );
}
