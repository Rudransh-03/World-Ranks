import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CountryState } from '../store/country-slice';

const useFilteredCountries = () => {
    const countries = useSelector((state: {countries:CountryState}) => state.countries.countries);
    const searchTerm = useSelector((state: {countries:CountryState}) => state.countries.searchTerm);
    const searchTerms = useSelector((state: {countries:CountryState}) => state.countries.searchTerms);
    const statusTerms = useSelector((state: {countries:CountryState}) => state.countries.statusTerms);
    const [tableContent, setTableContent] = useState<any[]>(countries);

    useEffect(() => {

        if(!searchTerm && searchTerms.length === 0){
            if(statusTerms.independent === false && statusTerms.unMember === false) setTableContent(countries);
            else{
                if(statusTerms.independent === true){
                    const newFilteredData = tableContent.filter((country)=>{
                        return (country.independent === true)
                    });

                    setTableContent(newFilteredData);
                }

                if(statusTerms.unMember === true){
                    const newFilteredData = tableContent.filter((country)=>{
                        return (country.unMember === true)
                    });

                    setTableContent(newFilteredData);
                }
            }
        }

        else{
            let filteredData:any[] = [];
            if(searchTerm && searchTerms.length > 0){
                filteredData = countries.filter(country => {
                    const lowerCaseCommonName = country.name.common.toLowerCase();
                    const lowerCaseRegion = country.region.toLowerCase();
                    return searchTerms.some(term =>
                        lowerCaseRegion.includes(term.toLowerCase()) &&
                        lowerCaseCommonName.includes(searchTerm)
                    );
                });
            }
    
            else if (searchTerm) {
                filteredData = countries.filter(country => {
                    return (
                        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        country.region.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                });
            } 

            else if (searchTerms.length > 0) {
                filteredData = countries.filter(country => {
                    const lowerCaseRegion = country.region.toLowerCase();
                    return searchTerms.some(term =>
                        lowerCaseRegion.includes(term.toLowerCase())
                    );
                });
            }

            if(statusTerms.independent === false && statusTerms.unMember === false){
                setTableContent(filteredData);
            }

            else{
                if(statusTerms.independent === true){
                    const newFilteredData = filteredData.filter((country)=>{
                        return (country.independent === true)
                    });

                    setTableContent(newFilteredData);
                }

                if(statusTerms.unMember === true){
                    const newFilteredData = filteredData.filter((country)=>{
                        return (country.unMember === true)
                    });

                    setTableContent(newFilteredData);
                }
            }
        }
    }, [searchTerm, searchTerms, countries, statusTerms.independent, statusTerms.unMember]);

    return { tableContent };
};

export default useFilteredCountries;