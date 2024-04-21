import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { countryActions } from "../store/country-slice";

const Button = ({children} : any) => {
    const dispatch = useDispatch();
    const[clicked, setClicked] =useState(false);


    useEffect(()=>{
        if(clicked){
            dispatch(countryActions.addToSearchTerms(children));
        }
        else{
            dispatch(countryActions.removeFromSearchTerms(children));
        }
    }, [clicked])

    function handleClick(){
        setClicked(!clicked);
    }

    return (
    <div className={`${clicked && 'bg-zinc-600 border border-lightGrey text-slate-200'} mx-2 mb-4 p-2 rounded-md hover:bg-zinc-600 hover:cursor-pointer text-gray-400 hover:text-slate-200`} onClick={handleClick}>{children}</div>
    )
}

export default Button