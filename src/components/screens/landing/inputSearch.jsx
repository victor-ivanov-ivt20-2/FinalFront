import bg from "@/components/ui kit/images/bg.png";
import Gilroy from "next/font/local";
import { Manrope } from "next/font/google";
import { PrimaryButton } from "@/components/ui kit/buttons";
import {
  SearchInput,
  CalendarInput,
  UsersInput,
  Checkbox,
} from "@/components/ui kit/input";
const gilroyBold = Gilroy({
  src: "../../../fonts/Gilroy-Bold.woff",
});
const gilroyMedium = Gilroy({
  src: "../../../fonts/Gilroy-Medium.woff",
});
const manrope = Manrope({
  subsets: ["cyrillic"],
});
export default function InputSearch() {
  const style = {
    backgroundImage: `url(${bg.src})`,
  };
  return (
    <div className="container w-full h-[637px]" style={style}>
      <div className={gilroyBold.className}>
        <h1 className="text-[48px] w-[54%] pl-[51px] pt-[158px] leading-[59px] font-extrabold text-white">
          Раскрась свой отдых{" "}
          <span className="text-[40px]">Которые очень красивые бла-бла</span>
        </h1>
        <div className="mx-[52px] mt-[30px]">
          <div
            style={{
              background: "rgba(255, 255, 255, 0.24)",
              backdropFilter: "blur(7.5px)",
            }}
            className="relative rounded-[32px] py-[33px] px-[46px]"
          >
            <h1 className={gilroyMedium.className}>
              <span className="text-[24px] leading-[29px] text-white">
                В путь с любовью
              </span>
            </h1>
            <div style={{ marginTop: "16px" }} className={manrope.className}>
              <form>
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
                    <PrimaryButton width="165px" rounded="16px">
                      Найти
                    </PrimaryButton>
                  </div>
                </div>
                <div className="flex mt-4 gap-4">
                  <Checkbox>Охота</Checkbox>
                  <Checkbox>Рыбалка</Checkbox>
                  <Checkbox>На берегу</Checkbox>
                  <Checkbox>Семейный отдых</Checkbox>
                  <Checkbox>Баня/сауна</Checkbox>
                  <Checkbox>Кемпинг</Checkbox>
                  <Checkbox>Сплав/Поход</Checkbox>
                  <Checkbox>Корпоративный отдых</Checkbox>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
