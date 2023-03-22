import Modal from ".";
import { useState } from "react";
import { useRouter } from "next/router";
import Gilroy from "next/font/local";
import { gql, useMutation } from "@apollo/client";
import { PrimaryButton } from "../../ui kit/buttons";
import { ModalInput } from "@/components/ui kit/input";
import { useAppDispatch } from "@/hooks";
import { setType } from "@/store/modal.slice";
const gilroyBold = Gilroy({
  src: "../../../fonts/Gilroy-Bold.woff",
});
const gilroyMedium = Gilroy({
  src: "../../../fonts/Gilroy-Medium.woff",
});
const SIGNIN = gql`
  mutation SignIn($input: SignInInput!) {
    signin(signInInput: $input) {
      accessToken
      refreshToken
      user {
        username
      }
    }
  }
`;
const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [signin, { data, loading }] = useMutation(SIGNIN);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const login = async (e) => {
    e.preventDefault();
    await signin({
      variables: {
        input: {
          email: email,
          password: password,
        },
      },
    }).then((response) => {
      localStorage.setItem("token", response.data.signin.accessToken);
      router.reload();
    });
  };
  return (
    <div className="h-[474px] w-[445px] py-12 px-8 rounded-3xl bg-white">
      <h1
        style={gilroyBold.style}
        className="text-slate-900 text-4xl leading-[48px] flex justify-center mb-8"
      >
        Войти
      </h1>
      <form className="flex flex-col gap-6" onSubmit={login}>
        <ModalInput
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Ваш e-mail*"
        ></ModalInput>
        <ModalInput
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Ваш пароль*"
        ></ModalInput>
        <PrimaryButton height="64px" width="100%">
          Войти
        </PrimaryButton>
      </form>
      <div className="flex justify-center items-center pt-8 gap-12 text-[15px] text-slate-900 underline leading-[26px]">
        <button
          onClick={() => {
            dispatch(setType("register"));
          }}
        >
          Регистрация
        </button>
        <button>Забыли пароль?</button>
      </div>
    </div>
  );
};

export default Login;
