import { useState, useEffect } from 'react';
import { CountryState } from '../store/country-slice';
import { FilteredCountriesResult, StatusTerms } from './Interfaces';
import { useAppSelector } from '../hooks';

function useFilteredCountries () : FilteredCountriesResult {
    const countries : any[] = useAppSelector((state: {countries:CountryState}) => state.countries.countries);
    const searchTerm : string = useAppSelector((state: {countries:CountryState}) => state.countries.searchTerm);
    const sortTerm : string = useAppSelector((state: {countries:CountryState}) => state.countries.sortTerm);
    const searchTerms : string[] = useAppSelector((state: {countries:CountryState}) => state.countries.searchTerms);
    const statusTerms : StatusTerms = useAppSelector((state: {countries:CountryState}) => state.countries.statusTerms);
    const [tableContent, setTableContent] = useState<any[]>(countries);

    useEffect(() => {
        let filteredData : any[] = countries;

        if(searchTerm){
            filteredData = filteredData.filter(country => {
            return (
                    country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    country.region.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });
        }

        if(sortTerm){
            filteredData = [...filteredData].sort((a, b) => {
                if (sortTerm === "name") return a.name.common.localeCompare(b.name.common);
                if (sortTerm === "population") return b.population - a.population;
                if (sortTerm === "area") return b.area - a.area;
                else return filteredData;
            });
        }

        if(searchTerms.length > 0){
            filteredData = filteredData.filter(country => {
            const lowerCaseRegion = country.region.toLowerCase();
            return searchTerms.some(term =>
                    lowerCaseRegion.includes(term.toLowerCase())
                );
            });
        }

        if(statusTerms.independent === true){
            filteredData = filteredData.filter((country)=>{
                return (country.independent === true)
            });
        }

        if(statusTerms.unMember === true){
            filteredData = filteredData.filter((country)=>{
                return (country.unMember === true)
            });
        }

        setTableContent(filteredData);

    }, [searchTerm, searchTerms, countries, statusTerms.independent, statusTerms.unMember, sortTerm]);

    return { tableContent };
};

export default useFilteredCountries;