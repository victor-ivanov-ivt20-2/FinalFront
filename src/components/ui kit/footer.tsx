import { FC } from "react";
import Logo from "./svg/Logo";
import MSG from "./svg/messangers";

const Footer: FC = () => {
  return (
    <footer className="mb-[45px] mt-4">
      <div className="container bg-white px-[52px] py-[32px] rounded-[40px] flex gap-10 flex-col">
        <div className="flex justify-between items-center">
          <Logo></Logo>
          <ul className="flex text-lg font-medium leading-[25px] text-[#747474] gap-8">
            <li>Главная</li>
            <li>Каталог</li>
            <li>Способ оплаты</li>
            <li>О нас</li>
          </ul>
          <div className="cursor-pointer">
            <MSG></MSG>
          </div>
        </div>
        <div className="flex justify-between items-center text-slate-400">
          <span>© 2010 - 2023 Веб-сервис «Впуть»</span>
          <span>Политика конфиденциалности</span>
          <span>Дизайн и разработка “ACE”</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
