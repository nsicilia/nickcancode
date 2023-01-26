import Image from "next/image";
import React from "react";

export default function TwoMobileImage({
  img1,
  alt1,
  desc1,
  img2,
  alt2,
  desc2,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-2/4 m-auto pb-16 place-items-center">
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
    </div>
  );
}
