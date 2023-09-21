import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import "./index.css";
import CityList from "./components/CityList";
import City from "./components/City";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import { JSONBIN_ID, JSONBIN_API_KEY } from "./secret/Keys";
import Form from "./components/Form";

// const BASE_URL = "http://localhost:8000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        // const res = await fetch(`${BASE_URL}/cities`);
        const res = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_ID}`, {
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key": JSONBIN_API_KEY,
          },
        });
        const data = await res.json();
        setCities(data.record.cities);
      } catch {
        alert("There was some error loading the data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
