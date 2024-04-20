import React, { useState, ChangeEvent } from 'react';

const SortFilter: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    console.log(value);
  };

  return (
    <div className='mb-12'>
      <label htmlFor="dropdown">Sort By:</label>
      <br></br>
      <select className="mt-2 text-white block appearance-none w-full px-4 py-2 pr-10 leading-tight bg-tableCard border border-lightGrey rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
 id="dropdown" value={selectedValue} onChange={handleDropdownChange}>
        <option value="">None</option>
        <option value="name" className="bg-black hover:bg-blue-500">Name</option>
        <option value="population" className="bg-black hover:bg-blue-500">Population</option>
        <option value="area" className="bg-black hover:bg-blue-500">Area</option>
      </select>
    </div>
  );
};

export default SortFilter;
