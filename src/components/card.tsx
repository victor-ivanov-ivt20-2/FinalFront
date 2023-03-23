import Favorite from "./ui kit/svg/favorite";
import Image from "next/image";
import Gilroy from "next/font/local";
const gilroyBold = Gilroy({
  src: "../fonts/Gilroy-Bold.woff",
});
const gilroyMedium = Gilroy({
  src: "../fonts/Gilroy-Medium.woff",
});
import image from "@/components/ui kit/images/image.png";
import { PrimaryButton } from "./ui kit/buttons";
import Star from "./ui kit/svg/Star";
export default function Card() {
  return (
    <div className="w-[421px] rounded-[20px] bg-white">
      <div className="relative">
        <div className="relative rounded-[20px] h-[180px] overflow-hidden">
          <Image
            className="absolute -top-16"
            src={image}
            alt="картиночка"
          ></Image>
        </div>
        <div className="absolute right-3 bottom-[10px] cursor-pointer">
          <Favorite />
        </div>
      </div>
      <div className="px-10 pt-5">
        <div className="flex pb-3">
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
        </div>
        <h1 className="text-slate-900 text-xl leading-[25px]">
          <span className={gilroyBold.className}>"Кэнкэмэ" турбаза</span>
        </h1>
        <span className="font-medium text-base leading-[22px] text-slate-500">
          Намский улус, Хамагаттинский наслег
        </span>
        <p className="pt-3 text-slate-900 text-base leading-[22px] font-medium">
          На турбазе 4 гостевых домика вместимостью до 7 человек со своей
          мангальной зоной.
        </p>
        <h1 className="text-slate-900 text-[40px] flex gap-2">
          <span className={gilroyMedium.className}>от</span>

          <span style={gilroyBold.style} className="text-[#3B82F6]">
            1000
          </span>
          <span style={gilroyBold.style}>₽</span>
        </h1>
        <div className="pt-5 pb-[34px] w-full">
          <PrimaryButton
            width="100%"
            height="56px"
            onClick={() => console.log("ну типа забронировал")}
          >
            Забронировать
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
