import axios from "axios";
import { Dispatch } from "redux";
import { countryActions } from "./country-slice";

export const fetchCountriesData : any = () => {
    // console.log("in fetchCountriesData function");

    return async(dispatch : Dispatch) => {
        const fetchCountries = async() => {
            const response = await fetch('https://restcountries.com/v3.1/all');

            if(!response.ok){
                throw new Error('Could not fetch countries data!');
            }

            const data = await response.json();
            return data;
        };

        const countriesData = await fetchCountries();

        // console.log("data is here");

        dispatch(countryActions.replaceCountries({
            countries: countriesData || [],
        }))
    }

}