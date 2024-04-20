import { useState, useEffect } from 'react';
import CountriesTableRow from "./CountriesTableRow";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import { CountryState } from "../store/country-slice";

const CountriesTable = () => {
    const countries = useSelector((state: {countries:CountryState}) => state.countries.countries);
    const searchTerm = useSelector((state: {countries:CountryState}) => state.countries.searchTerm);
    const [tableContent, setTableContent] = useState<any[]>(countries);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(20);

    useEffect(() => {
        if (searchTerm) {
            const filteredData = countries.filter(
                (country) =>
                    country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    country.region.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setTableContent(filteredData);
        } else {
            setTableContent(countries);
        }
    }, [searchTerm, countries]);

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
