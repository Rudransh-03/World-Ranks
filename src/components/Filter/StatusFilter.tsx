import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { countryActions } from '../../store/country-slice';

const StatusFilter = () => {

    const dispatch = useDispatch();
    
    const [isUNChecked, setIsUNChecked] = useState<boolean>(false);
    const [isIndependentChecked, setIsIndependentChecked] = useState<boolean>(false);


    const handleUNCheckboxChange = () => {
        setIsUNChecked(!isUNChecked);
        dispatch(countryActions.toggleStatusTerms("unMember"));
    };

    const handleIndependentCheckboxChange = () => {
        setIsIndependentChecked(!isIndependentChecked);
        dispatch(countryActions.toggleStatusTerms("independent"));
    };

    return (
    <>
        <div className='mb-2'>Status:</div>
        <div>
        <input
            type="checkbox"
            id="unMember"
            checked={isUNChecked}
            onChange={handleUNCheckboxChange}
            className='mr-4'
        />
        <label htmlFor="unMember">Member of the United Nations</label>
        </div>
        <div>
        <input
            type="checkbox"
            id="independent"
            checked={isIndependentChecked}
            onChange={handleIndependentCheckboxChange}
            className='mr-4'
        />
        <label htmlFor="independent">Independent</label>
        </div>
    </>
    )
}

export default StatusFilter