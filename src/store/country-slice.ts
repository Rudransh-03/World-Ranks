import { createSlice } from "@reduxjs/toolkit";


export interface CountryState {
    countries : any[],
    searchTerm : string
}

const initialState: CountryState = {
    countries: [],
    searchTerm: ""
};

const countrySlice = createSlice({
    name: 'countries',
    initialState,
    reducers:{
        replaceCountries(state, action){
            state.countries = action.payload.countries;
        },
        setSearchTerm(state, action){
            state.searchTerm = action.payload;
        }
    }
});

export const countryActions = countrySlice.actions;
export default countrySlice;