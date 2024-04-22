import SortFilter from './Filter/SortFilter'
import RegionFilter from './Filter/RegionFilter'
import StatusFilter from './Filter/StatusFilter'
import { ReactNode } from 'react'

function SearchFilters() : ReactNode {
  return (
    <>
    <SortFilter />
    <RegionFilter />
    <StatusFilter />
    </>
  )
}

export default SearchFilters