import { useAppDispatch, useAppSelector } from "@/hooks";
import authSlice, { setAuth } from "@/store/auth.slice";
import { setActive } from "@/store/modal.slice";
import Link from "next/link";
import { FC, useEffect } from "react";
import { PrimaryButton, SecondaryButton } from "./buttons";
import Logo from "./svg/Logo";
import NavLink from "./navlink";
import { useRouter } from "next/router";
const Header: FC = () => {
  const dispatch = useAppDispatch();
  const logged = useAppSelector((state) => state.auth.logged);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("token")) dispatch(setAuth(true));
    }
  }, []);
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
                <NavLink href="/">Главная</NavLink>
              </li>
              <li>
                <NavLink href="/catalog">Каталог</NavLink>
              </li>
              <li>
                <NavLink href="#">Способ оплаты</NavLink>
              </li>
              <li>
                <NavLink href="#">О нас</NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex gap-3">
            <PrimaryButton
              height="73px"
              width="270px"
              onClick={() => {
                logged
                  ? router.push("/create-tourbase")
                  : dispatch(setActive(true));
              }}
            >
              Добавить турбазу
            </PrimaryButton>
            <SecondaryButton
              width="165px"
              height="73px"
              onClick={() => {
                logged ? router.push("/profile") : dispatch(setActive(true));
              }}
            >
              {logged ? "Профиль" : "Войти"}
            </SecondaryButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
