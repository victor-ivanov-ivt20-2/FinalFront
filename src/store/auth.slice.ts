import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Auth = {
  logged: boolean;
};

const initialState: Auth = {
  logged: false,
};
const ModalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.logged = action.payload;
      console.log("lol");
    },
  },
});

export const { setAuth } = ModalSlice.actions;
export default ModalSlice.reducer;
