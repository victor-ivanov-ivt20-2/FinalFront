import Gilroy from "next/font/local";
import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
const gilroyBold = Gilroy({
  src: "../fonts/Gilroy-Bold.woff",
});
import SwipeLeft from "./ui kit/svg/swipe-left";

const BackTitle: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="bg-white rounded-[40px] mb-5 flex py-[35px] gap-8 px-[52px] items-center">
      <div
        onClick={() => {
          router.back();
        }}
        className="cursor-pointer"
      >
        <SwipeLeft></SwipeLeft>
      </div>
      <h1
        style={gilroyBold.style}
        className=" text-slate-900 text-[32px] leading-[48px]"
      >
        {children}
      </h1>
    </div>
  );
};

export default BackTitle;
