import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface User {
  email: string;
}
type Auth = {
  logged: boolean;
  user: User | undefined;
};

const initialState: Auth = {
  logged: false,
  user: undefined,
};
function parseJwt(token: string | null) {
  if (!token) {
    return;
  }
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
}
const ModalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.logged = action.payload;
      state.user = parseJwt(localStorage.getItem("token"));
      console.log(state.user);

      console.log("lol");
    },
  },
});

export const { setAuth } = ModalSlice.actions;
export default ModalSlice.reducer;
