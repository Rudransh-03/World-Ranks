import { ReactNode, useEffect, useState } from "react"
import { countryActions } from "../store/country-slice";
import { useAppDispatch } from "../hooks";
import { ButtonProps } from "./Interfaces";
  
  function Button ({ children } : ButtonProps) : ReactNode {
    const dispatch = useAppDispatch();
    const[clicked, setClicked] =useState<boolean>(false);


    useEffect(()=>{
        if(clicked){
            dispatch(countryActions.addToSearchTerms(children as string));
        }
        else{
            dispatch(countryActions.removeFromSearchTerms(children as string));
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