import { NavigateFunction, useNavigate } from "react-router-dom";
import { CountryNeighboursProps, NeighbourCountries } from "../../util/Interfaces";


const CountryNeighbours:React.FC<CountryNeighboursProps> = ({country, countries}) => {
    let navigate : NavigateFunction = useNavigate();
    let neighbours : NeighbourCountries[] = [];

    if(country!=undefined){
        
        if(country.borders){
            for(let i=0; i<country.borders.length; i++) {
                const abbreviation : string = country.borders[i];
                const searchCountry = countries.find(search => search.cca3 === abbreviation);
                if(searchCountry) {
                    neighbours.push({name: searchCountry.name.common, flag: searchCountry.flags.png});
                }
            }
        }
    }

    return (
        <>
        {(country != undefined) &&
            <div className='px-8 py-4 border-t border-gray-700'>
                <div className=''>
                    <div className='text-zinc-400 mb-4'>Neighbouring Countries</div>
                    
                    <div className='flex flex-wrap'>
                    {neighbours.map((neighbour, index) => (
                        <>
                            <div className='px-2 mb-4 hover:cursor-pointer w-1/6' key={index} onClick={()=>{navigate(`/country/${neighbour.name.toLowerCase()}`)}}>
                                    <img className='h-12 w-20 rounded-lg mb-2 ml-2' src={neighbour.flag} alt={`Image`} />
                                    <div className='text-center text-zinc-200 hover:underline'><div className='text-wrap'>{neighbour.name}</div></div>
                            </div>
                        </>
                    ))}
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default CountryNeighbours