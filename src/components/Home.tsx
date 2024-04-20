
import CountriesTable from "./CountriesTable"
import SearchForm from "./SearchForm"
import SearchFilters from "./SearchFilters"


const Home = () => {

    return (
    <div className='px-12 px-8 py-8 bg-bgBlack border border-lightGrey text-lightGrey flex'>
        <div className="w-1/4"><SearchFilters /></div>
        <div className="w-3/4">
            <SearchForm />
            <CountriesTable />
        </div>
    </div>
    )
}

export default Home