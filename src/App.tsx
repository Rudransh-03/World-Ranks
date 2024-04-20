import Header from "./components/Header"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import FiltereCountryTable from "./components/FilteredCountryTable";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCountriesData } from "./store/country-actions";

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCountriesData());
  },[dispatch]);


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs/:id" element={<FiltereCountryTable />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
