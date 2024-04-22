import { NavigateFunction, useNavigate } from "react-router-dom";
import { Country } from "../../util/Interfaces";

const CountriesTableRow: React.FC<Country> = ({flag, name, population, area, region}) => {

  const navigate : NavigateFunction = useNavigate();

  function handleClick() : void {
    navigate(`/country/${name.toLowerCase()}`);
  }

  return (
    <>
        <tr className="text-white font-extralight">
        <td className="py-4 flex justify-center"><img className="w-1/2 h-8 rounded-sm" src={flag}/></td>
        <td className="py-2 hover:underline hover:cursor-pointer" onClick={handleClick}>{name}</td>
        <td className="py-2 hover:underline hover:cursor-pointer" onClick={handleClick}>{population}</td>
        <td className="py-2 hover:underline hover:cursor-pointer" onClick={handleClick}>{area}</td>
        <td className="py-2">{region}</td>
      </tr>
  </>
  )
}

export default CountriesTableRow