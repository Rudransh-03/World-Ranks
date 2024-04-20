// import { FormEvent, useRef } from "react";
// import { fetchAllCountries } from "../util/FetchCountries";
// import { useNavigate } from 'react-router-dom';


// const SearchForm = () => {

//     const navigate = useNavigate();

//     const searchFilterRef = useRef<HTMLInputElement | null>(null);

//     const allCountries = fetchAllCountries();
//     const allCountriesData = allCountries.data;
//     console.log(allCountries);

//     const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         const searchTerm:string | undefined = searchFilterRef.current?.value;
//         if(searchTerm && allCountries){
//             const filteredData = allCountriesData.filter(
//                 (country) =>
//                     country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                     country.region.toLowerCase().includes(searchTerm.toLowerCase())
//             );

//             console.log(filteredData);

//             navigate(`/search/${searchTerm.toLowerCase()}`);
//             // <CountriesTable currentRecords={allCountries.currentRecords} nPages={allCountries.nPages} currentPage={allCountries.currentPage} setCurrentPage={allCountries.setCurrentPage}/>
//         }

//     };


//     return (
//     <div className='mb-8 flex justify-end'>
//         <form className='flex rounded-lg bg-gray-700 p-2 text-white' onSubmit={handleSubmit}>
//         <div className='translate-y-2 mx-2'>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//         </svg>
//         </div>
//             <input className='rounded-lg bg-gray-700 p-2 text-white focus:outline-none' size={40} type='search' id='filterText' name='filterText' placeholder='Search by name or region' ref={searchFilterRef} />
//         </form>
//     </div>
//     )
// }

// export default SearchForm