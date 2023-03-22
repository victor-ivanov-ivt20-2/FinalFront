import { useState, FormEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useRouter } from "next/router";
import { setActive } from "@/store/modal.slice";
import styles from "./Auth.module.scss";
import Gilroy from "next/font/local";
import { gql, useMutation } from "@apollo/client";
import { PrimaryButton } from "../ui kit/buttons";
const gilroyBold = Gilroy({
  src: "../../fonts/Gilroy-Bold.woff",
});
const gilroyMedium = Gilroy({
  src: "../../fonts/Gilroy-Medium.woff",
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

const Auth = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const modal = useAppSelector((state) => state.modal.active);
  const [signin, { data, loading }] = useMutation(SIGNIN);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const Login = async (e) => {
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
  const Register = () => {
    console.log("Вы зарегистрировались?");
  };
  return (
    <div
      style={modal ? { display: "flex" } : { display: "none" }}
      className="modal"
      onClick={() => void dispatch(setActive(false))}
    >
      <div className={styles.auth} onClick={(e) => e.stopPropagation()}>
        <h1>Войти</h1>
        <form onSubmit={Login}>
          <div>
            <input
              type="email"
              onChange={(e) => void setEmail(e.target.value)}
              value={email}
              placeholder="Ваш e-mail"
            />
          </div>
          <div>
            <input
              type="password"
              onChange={(e) => void setPassword(e.target.value)}
              value={password}
              placeholder="Ваш пароль"
            />
          </div>
          <div>
            <PrimaryButton
              width="100%"
              onClick={() => {
                Login;
              }}
            >
              Войти
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Auth;
