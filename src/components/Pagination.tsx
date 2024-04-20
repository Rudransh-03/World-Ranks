import { PaginationComponent } from "../util/Interfaces"


const Pagination = ({nPages, currentPage, setCurrentPage} : PaginationComponent) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    function goToNextPage() : void {
        if(currentPage !== nPages) setCurrentPage(currentPage + 1)
        else setCurrentPage(1)
    }
    
    function goToPrevPage() : void {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
        else setCurrentPage(nPages)
    }

    return (
        <div className="mt-8">
            <ul className='flex justify-center'>
                <li className="">
                    <div className="hover:cursor-pointer hover:text-white" 
                        onClick={goToPrevPage} 
                    >
                        Previous
                    </div>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`px-4 ${currentPage == pgNumber ? 'text-white' : ''} `} >

                        <div className="hover:cursor-pointer" onClick={() => setCurrentPage(pgNumber)}>
                            {pgNumber}
                        </div>
                    </li>
                ))}
                <li className="">
                    <div className="hover:cursor-pointer hover:text-white" 
                        onClick={goToNextPage} 
                    >
                        Next
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Pagination