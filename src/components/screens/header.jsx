import Link from "next/link";
import { PrimaryButton } from "./buttons";
import Logo from "./svg/Logo";

const Header = () => {
  return (
    <header>
      <div className="container mb-4 h-[100px] flex items-center bg-white rounded-b-[44px]">
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
          <PrimaryButton
            height="73px"
            width="254px"
            onClick={() => {
              console.log("clicked");
            }}
          >
            Создать объявление
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
