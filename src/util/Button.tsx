import { useState } from "react"

const Button = ({children} : any) => {

    const[clicked, setClicked] =useState(false);

    function handleClick(){
        setClicked(!clicked);
    }

    return (
    <div className={`${clicked && 'bg-zinc-600 border border-lightGrey text-slate-200'} mx-2 mb-4 p-2 rounded-md hover:bg-zinc-600 hover:cursor-pointer text-gray-400 hover:text-slate-200`} onClick={handleClick}>{children}</div>
    )
}

export default Button