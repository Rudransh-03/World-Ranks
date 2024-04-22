import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./country-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {ui: uiSlice.reducer, countries: countrySlice.reducer}
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch