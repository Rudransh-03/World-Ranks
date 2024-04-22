import { OnlyTableProps } from '../../util/Interfaces'
import CountriesTableHeader from './CountiresTableHeader'
import CountriesTableRow from './CountriesTableRow'


const OnlyTable: React.FC<OnlyTableProps> = ({currentRecords}) => {
  return (
    <table className="w-full bg-tableCard rounded-md text-center">
        <thead>
            <CountriesTableHeader />
        </thead>
        <tbody>
            {!currentRecords && <div>Hii</div>}
            
        {
            currentRecords.map((country:any, index:number)=>(
                <CountriesTableRow key={index} flag={country.flags.png} name={country.name.common} area={country.area} region={country.region} population={country.population}/>
            ))
        }
        </tbody>
    </table>
  )
}

export default OnlyTable