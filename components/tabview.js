import React from "react";
import ShowcaseImage from "../components/showcaseimage";
import Image from "next/image";

const ImageTabs = ({ src1, alt1, src2, alt2 }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap w-2/4 mx-auto pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-ncc-plum"
                    : "text-white bg-transparent")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Old
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-ncc-plum"
                    : "text-white bg-transparent")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                New
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words mb-6 rounded">
            <div className="flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="bg-[url('/placeholderloading.svg')] bg-cover h-[27vh] md:h-[85vh] w-11/12 md:w-[67vw] relative mx-auto  rounded-lg md:rounded-xl">
                    <Image
                      src={src1}
                      alt={alt1}
                      placeholder="blur"
                      blurDataURL={"/placeholderloading.svg"}
                      className=" object-cover rounded-lg md:rounded-xl"
                      fill
                    />
                  </div>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="bg-[url('/placeholderloading.svg')] bg-cover h-[27vh] md:h-[85vh] w-11/12 md:w-[67vw] relative mx-auto  rounded-lg md:rounded-xl">
                    <Image
                      src={src2}
                      alt={alt2}
                      placeholder="blur"
                      blurDataURL={"/placeholderloading.svg"}
                      className=" object-cover rounded-lg md:rounded-xl"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender({ src1, alt1, src2, alt2 }) {
  return (
    <div className="mx-auto">
      <ImageTabs src1={src1} alt1={alt1} src2={src2} alt2={alt2} />
    </div>
  );
}
