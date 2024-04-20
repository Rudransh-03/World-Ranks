import { useSelector } from 'react-redux';
import { CountryState } from '../store/country-slice';

const Test = () => {
    const term = useSelector((state: {countries:CountryState}) => state.countries.searchTerm);
    console.log(term);
  return (
    <div>Test</div>
  )
}

export default Test