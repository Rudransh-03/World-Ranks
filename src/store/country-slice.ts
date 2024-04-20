import { createSlice } from "@reduxjs/toolkit";


export interface CountryState {
    countries : any[]
}

const initialState: CountryState = {
    countries: [],
};

const countrySlice = createSlice({
    name: 'countries',
    initialState,
    reducers:{
        replaceCountries(state, action){
            state.countries = action.payload.countries;
        }
    }
});

export const countryActions = countrySlice.actions;
export default countrySlice;