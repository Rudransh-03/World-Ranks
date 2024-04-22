import Header from "./components/Header"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import { useEffect } from "react";
import { fetchCountriesData } from "./store/country-actions";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import { useAppDispatch } from "./hooks";

function App() {

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(fetchCountriesData());
  },[dispatch]);


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
        <Route path="country/:name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
