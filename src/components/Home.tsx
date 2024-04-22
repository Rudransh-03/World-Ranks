
import CountriesTable from "./CountriesTable/CountriesTable"
import SearchForm from "./SearchForm"
import SearchFilters from "./SearchFilters"


const Home:React.FC = () => {

    return (
    <div className='min-h-screen px-12 px-8 py-8 bg-bgBlack border border-lightGrey text-lightGrey flex'>
        <div className="w-1/4"><SearchFilters /></div>
        <div className="w-3/4">
            <SearchForm />
            <CountriesTable />
        </div>
    </div>
    )
}

export default Home