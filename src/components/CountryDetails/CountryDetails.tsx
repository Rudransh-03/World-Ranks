import { useSelector } from 'react-redux';
import { CountryState } from '../../store/country-slice';
import CountryInformation from './CountryInformation';
import CountryHeading from './CountryHeading';
import CountryNeighbours from './CountryNeighbours';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { name } = useParams<{ name: string }>();
    const countries = useSelector((state: {countries:CountryState}) => state.countries.countries);
    const country = countries.find(country => country.name.common.toLowerCase() === name);

    return (
    <div className='bg-bgBlack text-white flex justify-center'>
        <div className='bg-bgBlack border border-gray-700 z-10 rounded-lg -mt-12 w-6/12 mb-20 shadow-2xl'>
            {(country != undefined) &&
            <>
                <CountryHeading country={country} />
                <CountryInformation country={country} />
                <CountryNeighbours country={country} countries={countries} />
            </>
            }
        </div>
    </div>
    )
}

export default CountryDetails;