import CountriesTableRow from "./CountriesTableRow"
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import { CountryState } from "../store/country-slice";
import { useState } from "react";

const CountriesTable = () => {

    const countriesData = useSelector((state: {countries:CountryState}) => state.countries);
    console.log("huhuhu");
    const countries = countriesData.countries;

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(20);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const currentRecords = countries.slice(indexOfFirstRecord, indexOfLastRecord);

    const nPages = Math.ceil(countries.length / recordsPerPage)
    
    return (
    <>
        <table className="w-full bg-tableCard text-center">
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
            
    )
}

export default CountriesTable;