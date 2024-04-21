import { useState, useEffect } from 'react';
import CountriesTableRow from "./CountriesTableRow";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import { CountryState } from "../store/country-slice";

const CountriesTable = () => {
    const countries = useSelector((state: {countries:CountryState}) => state.countries.countries);
    const searchTerm = useSelector((state: {countries:CountryState}) => state.countries.searchTerm);
    const searchTerms = useSelector((state: {countries:CountryState}) => state.countries.searchTerms);
    const statusTerms = useSelector((state: {countries:CountryState}) => state.countries.statusTerms);
    const [tableContent, setTableContent] = useState<any[]>(countries);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(20);

    useEffect(() => {

        // if(!searchTerm && searchTerms.length === 0 && statusTerms.independent === false && statusTerms.unMember === false){
        //     setTableContent(countries);
        // }

        if(searchTerm && searchTerms.length > 0){
            const filteredData = countries.filter(country => {
                const lowerCaseCommonName = country.name.common.toLowerCase();
                const lowerCaseRegion = country.region.toLowerCase();
                return searchTerms.some(term =>
                    lowerCaseRegion.includes(term.toLowerCase()) &&
                    lowerCaseCommonName.includes(searchTerm)
                );
            });

            if(statusTerms.independent === false && statusTerms.unMember === false){
                console.log("Entered 3rd condition");
                setTableContent(filteredData);
            }

            else{
                console.log("Entered 2nd condition");
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

        else if (searchTerm) {
            const filteredData = countries.filter(
                country =>{
                    return (
                    country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    country.region.toLowerCase().includes(searchTerm.toLowerCase()));
                }
            );
            if(statusTerms.independent === false && statusTerms.unMember === false){
                console.log("Entered 3rd condition");
                setTableContent(filteredData);
            }

            else{
                console.log("Entered 2nd condition");
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
        else if (searchTerms.length > 0) {
            console.log("Entered first condition");
            const filteredData = countries.filter(country => {
                const lowerCaseRegion = country.region.toLowerCase();
                return searchTerms.some(term =>
                    lowerCaseRegion.includes(term.toLowerCase())
                );
            });

            if(statusTerms.independent === false && statusTerms.unMember === false){
                console.log("Entered 3rd condition");
                setTableContent(filteredData);
            }

            else{
                console.log("Entered 2nd condition");
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
        else {
            setTableContent(countries);
        }
    }, [searchTerm, searchTerms, countries, statusTerms.independent, statusTerms.unMember]);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = tableContent.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(tableContent.length / recordsPerPage);

    return (
        <>
        {searchTerm && <p className='text-white'>Found {tableContent.length} results for "{searchTerm}"</p>}
            <table className="w-full bg-tableCard rounded-md text-center">
                <thead>
                    <tr className="border-b border-lightGrey">
                    <th className="w-1/12 py-2">Flag</th>
                    <th className="w-1/6 px-4 py-2">Name</th>
                    <th className="w-1/6 px-4 py-2">Population</th>
                    <th className="w-1/6 px-4 py-2">Area (km<sup>2</sup>)</th>
                    <th className="w-1/6 px-4 py-2">Region</th>
                    </tr>
                </thead>
                <tbody>
                    
                {
                    currentRecords.map((country:any, index:number)=>(
                        <CountriesTableRow key={index} flag={country.flags.png} name={country.name.common} area={country.area} region={country.region} population={country.population}/>
                    ))
                }
                </tbody>
            </table>
            <Pagination 
                        nPages={nPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
            />
        </>
    );
};

export default CountriesTable;
