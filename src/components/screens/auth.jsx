import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

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

export default function Auth() {
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
    });
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={login}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
