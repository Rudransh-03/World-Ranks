import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./country-slice";

const store = configureStore({
    reducer: {countries: countrySlice.reducer}
});

export default store;