import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
const globalState = configureStore({
  reducer: {
    cartSlice,
  },
});
export default globalState;
