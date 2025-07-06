import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Picker = ({ data }) => {
  const [imageUrl, setImageUrl] = useState("/portfolioimage.jpg");

  // const [isTransitioning, setIsTransitioning] = useState(false);

  const imageAnimation = useAnimation();

  const handleImageChange = (url) => {
    //setIsTransitioning(true);
    imageAnimation
      .start({
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      })
      .then(() => {
        setImageUrl(url);
        imageAnimation.start({
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        });
      });
  };

  return (
    <div class="bg-transparent grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="justify-self-center overflow-y-scroll h-[90vh] md:h-[80vh] sticky top-5 z-50">
        {data.map(function (d, idx) {
          return (
            <li key={idx} className="list-none">
              <Link
                href={d.link}
                className=""
                onMouseEnter={() => {
                  handleImageChange(d.image);
                  //setImageUrl(d.image);
                }}
                onMouseLeave={() => {
                  handleImageChange("/portfolioimage.jpg");
                  //setImageUrl("/applecomputer.jpg");
                }}
              >
                <div className=" w-full my-4 rounded-lg tracking-wide	">
                  <div class="flex flex-col ...">
                    <div className="text-white text-3xl font-serif hover:text-ncc-bakermiller">
                      {d.name}
                    </div>
                    <div className="font-mono font-semibold text-slate-400">
                      {d.sub}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </div>

      <motion.div
        animate={imageAnimation}
        className="h-[70vh] w-[45vw] relative hidden sticky top-5 z-50 md:inline mt-4"
      >
        <Image
          src={imageUrl}
          className="object-cover rounded-3xl "
          alt=""
          fill
        />
      </motion.div>
    </div>
  );
};

export default Picker;
