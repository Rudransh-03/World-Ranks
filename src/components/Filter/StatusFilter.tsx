import { useState } from 'react'
import { countryActions } from '../../store/country-slice';
import { useAppDispatch } from '../../hooks';

const StatusFilter: React.FC  = () => {

    const dispatch = useAppDispatch();
    
    const [isUNChecked, setIsUNChecked] = useState<boolean>(false);
    const [isIndependentChecked, setIsIndependentChecked] = useState<boolean>(false);


    function handleUNCheckboxChange () : void {
        setIsUNChecked(!isUNChecked);
        dispatch(countryActions.toggleStatusTerms("unMember"));
    };

    function handleIndependentCheckboxChange(): void {
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