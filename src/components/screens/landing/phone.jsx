import Image from "next/image";
import phone from "@/components/ui kit/images/phone.png";
import Life from "@/components/ui kit/svg/life";
import Gilroy from "next/font/local";
import { PrimaryButton } from "@/components/ui kit/buttons";
const gilroyBold = Gilroy({
  src: "../../../fonts/Gilroy-Bold.woff",
});
const gilroyMedium = Gilroy({
  src: "../../../fonts/Gilroy-Medium.woff",
});
const Phone = () => {
  return (
    <div className="container bg-white rounded-[40px] pt-7 px-[52px] pb-8">
      <Life />
      <div className="flex gap-10">
        <div className="w-[608px] pt-[27.5px]">
          <div
            style={gilroyMedium.style}
            className="text-[60px] leading-[73px] flex gap-6"
          >
            <h1>мы всегда на</h1>
            <span
              style={{
                background: "rgba(59, 130, 246, 0.08)",
                border: "1px dashed #3B82F6",
                borderRadius: "20px",
                color: "#3B82F6",
                padding: "0 24px",
                lineHeight: "68px",
              }}
            >
              связи
            </span>
          </div>
          <h1
            style={gilroyBold.style}
            className="text-[60px] leading-[74px] text-slate-900"
          >
            +7 495 105 07 07
          </h1>
          <div className="mb-5 bg-[#F3F3F3] px-4 py-[22px] w-[80%] rounded-3xl">
            <input
              className="outline-none bg-[#F3F3F3] w-full placeholder:text-[#A0A0A0] placeholder:text-[15px] placeholder:leading-[20px] placeholder:font-medium"
              type="text"
              placeholder="Введите свой номер телефона"
            />
          </div>
          <span>
            Нажимая на кнопку, я соглашаюсь на обработку персональных данных
          </span>
          <div className="mt-5">
            <PrimaryButton>Оставить заявку</PrimaryButton>
          </div>
        </div>
        <div>
          <Image src={phone}></Image>
        </div>
      </div>
    </div>
  );
};

export default Phone;
