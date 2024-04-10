import { useState } from "react";
import { useEffect } from "react";
import './countries.css'
import Country from "../country/Country";

const Countries = () => {
    const [Countries,setCountries] = useState([])
    const [visitedCountries,setVisitedCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountries(data))
    },[]);

    const handleVisitedCountry = country => {
        const newVisitedCountry = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountry);
    }
    return (
        <div>
            <h2> Countries:{Countries.length}</h2>
            <div>
                <h3>Country I Visited: {visitedCountries.length}</h3>
                <ul>
                    {visitedCountries.map(country=> <li key={country.cca3}>{country.name.common}</li>)}
                </ul>
            </div>
            <div className="country-container">
            {
                Countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry} ></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;