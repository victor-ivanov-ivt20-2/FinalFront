import Card from "@/components/card";
import {
  SearchInput,
  CalendarInput,
  UsersInput,
  Checkbox,
} from "@/components/ui kit/input";
import SwipeLeft from "@/components/ui kit/svg/swipe-left";
import { PrimaryButton } from "@/components/ui kit/buttons";
import Gilroy from "next/font/local";
import { useRouter } from "next/router";
const gilroyBold = Gilroy({
  src: "../../../fonts/Gilroy-Bold.woff",
});
const gilroyMedium = Gilroy({
  src: "../../../fonts/Gilroy-Medium.woff",
});
const CatalogPage = () => {
  const router = useRouter();
  return (
    <div className="container">
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
          Каталог
        </h1>
      </div>
      <div className="bg-white rounded-[40px] pt-[25px] px-[101px] pb-[42px] mb-5">
        <div className="flex gap-5 items-center">
          <div className="flex-1">
            <SearchInput />
          </div>
          <div className="w-[264px]">
            <CalendarInput />
          </div>
          <div className="w-[174px]">
            <UsersInput />
          </div>
          <div className="flex-2">
            <PrimaryButton width="165px" height="64px" rounded="16px">
              Найти
            </PrimaryButton>
          </div>
        </div>
        <div className="flex mt-4 gap-4">
          <Checkbox color="black">Охота</Checkbox>
          <Checkbox color="black">Рыбалка</Checkbox>
          <Checkbox color="black">На берегу</Checkbox>
          <Checkbox color="black">Семейный отдых</Checkbox>
          <Checkbox color="black">Баня/сауна</Checkbox>
          <Checkbox color="black">Кемпинг</Checkbox>
          <Checkbox color="black">Сплав/Поход</Checkbox>
          <Checkbox color="black">Корпоративный отдых</Checkbox>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
