import { useState } from 'react';
import Pagination from "../Pagination";
import { useSelector } from "react-redux";
import { CountryState } from "../../store/country-slice";
import { NotifState } from '../../store/ui-slice';
import OnlyTable from './OnlyTable';
import Loader from '../Loader';
import useFilteredCountries from '../../util/useFilterCountries';
import { FilteredCountriesResult } from '../../util/Interfaces';

const CountriesTable : React.FC  = () => {
    const loadingText : string = useSelector((state: { ui:NotifState })=>state.ui.loadingText);
    const searchTerm : string = useSelector((state: {countries:CountryState}) => state.countries.searchTerm);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [recordsPerPage] = useState<number>(20);

    const { tableContent } : FilteredCountriesResult = useFilteredCountries();

    const indexOfLastRecord : number = currentPage * recordsPerPage;
    const indexOfFirstRecord : number = indexOfLastRecord - recordsPerPage;
    const currentRecords : any[] = tableContent.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages : number = Math.ceil(tableContent.length / recordsPerPage);

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