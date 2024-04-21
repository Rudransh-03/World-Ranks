import SortFilter from './Filter/SortFilter'
import RegionFilter from './Filter/RegionFilter'
import StatusFilter from './Filter/StatusFilter'

const SearchFilters = () => {
  return (
    <>
    <SortFilter />
    <RegionFilter />
    <StatusFilter />
    </>
  )
}

export default SearchFilters