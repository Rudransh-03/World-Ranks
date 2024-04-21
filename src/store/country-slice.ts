import { createSlice } from "@reduxjs/toolkit";


export interface CountryState {
    countries : any[],
    searchTerm : string,
    searchTerms : string[],
    statusTerms : {
        unMember : boolean,
        independent : boolean
    }
}

const initialState: CountryState = {
    countries: [],
    searchTerm: "",
    searchTerms : [],
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
        
        setSearchTerm(state, action){
            state.searchTerm = action.payload;
        },

        addToSearchTerms(state, action){
            state.searchTerms.push(action.payload);
        },

        removeFromSearchTerms(state, action){
            state.searchTerms = state.searchTerms.filter((term) => term !== action.payload)
        },

        toggleStatusTerms(state, action){
            const key = action.payload; 
            if(key === "unMember"){
                state.statusTerms.unMember = !state.statusTerms.unMember;
                state.statusTerms.independent = state.statusTerms.independent;
            }
            else{
                state.statusTerms.unMember = state.statusTerms.unMember;
                state.statusTerms.independent = !state.statusTerms.independent;
            }

            // console.log(state.statusTerms.independent);
        },
        
        sortCountries(state, action) {
              const sortedCountries = [...state.countries].sort((a, b) => {
                if (action.payload === "name") return a.name.common.localeCompare(b.name.common);
                if (action.payload === "population") return b.population - a.population;
                if (action.payload === "area") return b.area - a.area;
              });
              state.countries = sortedCountries;
          }
    }
});

export const countryActions = countrySlice.actions;
export default countrySlice;