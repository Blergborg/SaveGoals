import { configureStore } from "@reduxjs/toolkit";
import currentSavedSlice from "./features/currentSaved/currentSavedSlice";

export default configureStore({
  reducer: {
    currentSaved: currentSavedSlice,
  },
});
