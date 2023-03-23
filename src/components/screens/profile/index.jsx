import BackTitle from "@/components/backTitle";
import { ModalInput } from "@/components/ui kit/input";
import { PrimaryButton } from "@/components/ui kit/buttons";
import { gql, useMutation } from "@apollo/client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";
import { setAuth } from "@/store/auth.slice";
import { useRouter } from "next/router";

const LOGOUT = gql`
  mutation logout($email: String!) {
    logout(email: $email) {
      loggedOut
    }
  }
`;

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);
  const logged = useAppSelector((state) => state.auth.logged);
  const [logout, { data, loading }] = useMutation(LOGOUT);
  const logg = async () => {
    await logout({
      variables: {
        email: user.email,
      },
      context: {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    })
      .then((response) => {
        console.log(response);
        localStorage.removeItem("token");
        dispatch(setAuth(false));
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("token");
        dispatch(setAuth(false));
        router.push("/");
      });
  };
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        if (!localStorage.getItem("token")) router.push("/");
      }
    }, 1000);
  }, []);
  if (logged)
    return (
      <div className="container">
        <BackTitle>Профиль</BackTitle>
        <div className="bg-white px-[52px] pt-[71px] flex gap-[267px] rounded-[40px]">
          <ul className="flex flex-col gap-12">
            <li>Личные данные</li>
            <li>Избранное</li>
            <li>Заявки</li>
            <li onClick={() => logg()}>Выйти из профиля</li>
          </ul>
          <div className="flex flex-col gap-12">
            <div className="flex gap-6">
              <div className="w-[335px] flex flex-col gap-3">
                <label>ФИО</label>
                <ModalInput placeholder="ФИО"></ModalInput>
              </div>
              <div className="w-[335px] flex flex-col gap-3">
                <label>Телефон</label>
                <ModalInput placeholder="+7 (900) 000-00-00"></ModalInput>
              </div>
            </div>
            <div className="w-[335px] flex flex-col gap-3">
              <label>Почта</label>
              <ModalInput type="email" placeholder="Почта"></ModalInput>
            </div>
            <div className="flex gap-6">
              <div className="w-[335px] flex flex-col gap-3">
                <label>Измените пароль</label>
                <ModalInput
                  type="password"
                  placeholder="Измените пароль"
                ></ModalInput>
              </div>

              <div className="w-[335px] flex flex-col gap-3">
                <label>Введите ещё раз</label>
                <ModalInput
                  type="password"
                  placeholder="Введите еще раз"
                ></ModalInput>
              </div>
            </div>
            <div className="pb-[147px]">
              <PrimaryButton>Сохранить изменения</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    );
  return <></>;
};

export default ProfilePage;
