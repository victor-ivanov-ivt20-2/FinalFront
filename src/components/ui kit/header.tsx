import Link from "next/link";
import { FC } from "react";
import { PrimaryButton, SecondaryButton } from "./buttons";
import Logo from "./svg/Logo";

const Header: FC = () => {
  return (
    <header className="mb-4">
      <div className="container h-[100px] flex items-center bg-white rounded-b-[44px]">
        <div className="w-full px-[52px] flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
          <nav>
            <ul className="flex text-lg font-medium leading-[25px] text-[#747474] gap-8">
              <li>
                <Link href="#">Главная</Link>
              </li>
              <li>
                <Link href="#">Каталог</Link>
              </li>
              <li>
                <Link href="#">Способ оплаты</Link>
              </li>
              <li>
                <Link href="#">О нас</Link>
              </li>
            </ul>
          </nav>
          <div className="flex gap-3">
            <PrimaryButton
              height="73px"
              width="270px"
              onClick={() => {
                console.log("clicked");
              }}
            >
              Добавить турбазу
            </PrimaryButton>
            <SecondaryButton
              width="165px"
              height="73px"
              onClick={() => console.log("je")}
            >
              Войти
            </SecondaryButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
