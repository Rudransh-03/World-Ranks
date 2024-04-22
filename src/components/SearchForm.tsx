import { FormEvent, useRef } from "react";
import { countryActions } from "../store/country-slice";
import { useAppDispatch } from "../hooks";


const SearchForm:React.FC = () => {
    const dispatch = useAppDispatch();

    const searchFilterRef: React.MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) : void => {
        event.preventDefault();
        if(searchFilterRef.current !=null){
            const searchTerm:string = searchFilterRef.current.value;
            dispatch(countryActions.setSearchTerm(searchTerm));
        }
    };


    return (
    <div className='mb-8 flex justify-end'>
        <form className='flex rounded-lg bg-tableCard p-2 text-white' onSubmit={handleSubmit}>
        <div className='translate-y-2 mx-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </div>
            <input className='rounded-lg bg-tableCard p-2 text-white focus:outline-none' size={40} type='search' id='filterText' name='filterText' placeholder='Search by name or region' ref={searchFilterRef} />
        </form>
    </div>
    )
}

export default SearchForm