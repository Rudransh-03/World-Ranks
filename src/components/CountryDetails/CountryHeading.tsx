import { CountryInterface } from "../../util/Interfaces"


const CountryHeading: React.FC<CountryInterface> = ({country}) => {
  return (
    <>
    <div className='flex justify-center '>
        <img className="rounded-lg h-44 w-2/6 -mt-12" src={country.flags.png} alt="country_flag"/>
    </div>
    
    <div className='flex justify-center mt-8 text-gray-300 text-4xl font-semibold mx-8 text-center'>{country.name.common}</div>
    
    <div className='flex justify-center mt-2 text-gray-300 text-xl'>{country.name.official}</div>
    
    <div className='flex justify-center mt-8 mb-12'>
        
        <div className='mx-4 flex rounded-lg bg-zinc-800 border-lightGrey p-3 text-gray-200'>
            <div className='border-r border-lightGrey p-2'>Population</div> 
            <div className='py-2 px-4'>{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
        </div>
        
        <div className='mx-4 flex rounded-lg bg-zinc-800 border-lightGrey p-3 text-gray-200'>
            <div className='border-r border-lightGrey p-2'>Area(km<sup>2</sup>)</div> 
            <div className='py-2 px-4'>{country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
        </div>
    </div>   
    </>
  )
}

export default CountryHeading