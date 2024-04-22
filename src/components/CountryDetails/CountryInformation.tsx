import { CountryInfoCard } from "./CountryInfoCard";

const CountryInformation = ({country} : any) => {

    let languages : string  = "";
    let currencies : string  = "";
    let continents : string = "";

    if(country!=undefined){
        for (const [, value] of Object.entries(country.languages)) {
            let val:string = `${value}`;
            languages = languages.concat(val+", ");
        }
        languages = languages.substring(0, languages.length-2)

        if(country.currencies){
            for (const [, value] of Object.entries(country.currencies)) {
            let val:any = value;
            currencies = currencies.concat(val.name+", ");
            }
        }
        currencies = currencies.substring(0, currencies.length-2)

        for(let i=0; i<country.continents.length; i++){
            continents = continents.concat(country.continents[i] + ", ")
        }
        continents = continents.substring(0, continents.length-2);
    }

    return (
    <>
        <CountryInfoCard title="Capital" value={country.capital} />
        <CountryInfoCard title="Subregion" value={country.subregion} />
        <CountryInfoCard title="Languages" value={languages} />
        <CountryInfoCard title="Currencies" value={currencies} />
        <CountryInfoCard title="Continents" value={continents} />
    </>
    )
}

export default CountryInformation