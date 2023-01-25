import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ShowcaseImage({ src, alt }) {
  return (
    <div className="h-[30vh] md:h-[85vh] w-11/12 md:w-3/4 relative mx-auto my-16">
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        blurDataURL={"/placeholderloading.svg"}
        className="bg-[url('/placeholderloading.svg')] object-cover rounded-lg md:rounded-xl"
        fill
      />
    </div>
  );
}
