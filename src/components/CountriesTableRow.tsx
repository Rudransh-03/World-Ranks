
import { Country } from "../util/Interfaces";


const CountriesTableRow = ({flag, name, population, area, region}:Country) => {

  return (
    <>
        <tr className="text-white font-extralight">
        <td className="py-4 flex justify-center"><img className="w-1/2 h-8 rounded-sm" src={flag}/></td>
        <td className="py-2 hover:underline hover:cursor-pointer">{name}</td>
        <td className="py-2 hover:underline hover:cursor-pointer">{population}</td>
        <td className="py-2 hover:underline hover:cursor-pointer">{area}</td>
        <td className="py-2">{region}</td>
      </tr>
  </>
  )
}

export default CountriesTableRow