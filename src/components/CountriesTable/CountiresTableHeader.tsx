

const CountriesTableHeader = () => {
  return (
    <>
        <tr className="border-b border-gray-700">
        <th className="w-1/12 py-2">Flag</th>
        <th className="w-1/6 px-4 py-2">Name</th>
        <th className="w-1/6 px-4 py-2">Population</th>
        <th className="w-1/6 px-4 py-2">Area (km<sup>2</sup>)</th>
        <th className="w-1/6 px-4 py-2">Region</th>
        </tr>
    </>
  )
}

export default CountriesTableHeader