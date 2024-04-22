import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StatusTerms } from "../util/Interfaces";


export interface CountryState {
    countries : any[],
    searchTerm : string,
    searchTerms : string[],
    sortTerm: string,
    statusTerms : StatusTerms
}

const initialState: CountryState = {
    countries: [],
    searchTerm: "",
    searchTerms : [],
    sortTerm: "",
    statusTerms: {
        unMember: false,
        independent: false
    }
};

const countrySlice = createSlice({
    name: 'countries',
    initialState,
    reducers:{
        replaceCountries(state, action){
            state.countries = action.payload.countries;
        },
        
        setSearchTerm(state, action:PayloadAction<string>) {
            state.searchTerm = action.payload;
        },

        addToSearchTerms(state, action:PayloadAction<string>){
            state.searchTerms.push(action.payload);
        },

        removeFromSearchTerms(state, action:PayloadAction<string>){
            state.searchTerms = state.searchTerms.filter((term) => term !== action.payload)
        },

        toggleStatusTerms(state, action:PayloadAction<string>){
            const key = action.payload; 
            if(key === "unMember"){
                state.statusTerms.unMember = !state.statusTerms.unMember;
                state.statusTerms.independent = state.statusTerms.independent;
            }
            else{
                state.statusTerms.unMember = state.statusTerms.unMember;
                state.statusTerms.independent = !state.statusTerms.independent;
            }
        },
        
        sortCountries(state, action:PayloadAction<string>) {
            state.sortTerm = action.payload
          }
    }
});

export const countryActions = countrySlice.actions;
export default countrySlice;