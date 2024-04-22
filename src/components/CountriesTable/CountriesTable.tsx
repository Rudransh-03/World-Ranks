import { useState } from 'react';
import Pagination from "../Pagination";
import { useSelector } from "react-redux";
import { CountryState } from "../../store/country-slice";
import { NotifState } from '../../store/ui-slice';
import OnlyTable from './OnlyTable';
import Loader from '../Loader';
import useFilteredCountries from '../../util/useFilterCountries';

const CountriesTable = () => {
    const loadingText = useSelector((state: { ui:NotifState })=>state.ui.loadingText);
    const searchTerm = useSelector((state: {countries:CountryState}) => state.countries.searchTerm);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(20);

    const { tableContent } = useFilteredCountries();

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = tableContent.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(tableContent.length / recordsPerPage);

    return (
        <>
            {searchTerm && <p className='text-white'>Found {tableContent.length} results for "{searchTerm}"</p>}
            {loadingText.length == 0 ?
                <OnlyTable currentRecords={currentRecords}/>
                :
                <Loader />
            }
            {!loadingText && <Pagination 
                        nPages={nPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
            />}
        </>
    );
};

export default CountriesTable;