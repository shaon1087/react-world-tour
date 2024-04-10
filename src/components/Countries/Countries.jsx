import { useState } from "react";
import { useEffect } from "react";
import './countries.css'
import Country from "../country/Country";

const Countries = () => {
    const [Countries,setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountries(data))
    },[]);

    const handleVisitedCountry = country => {

        const newVisitedCountry = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountry);
    }

    const handleVisitedFlag = flag => {
        console.log('flag');
       const newVisitedFlag = [...visitedFlags, flag]
       setVisitedFlags(newVisitedFlag);
    }
    return (
        <div>
            <h2> Countries:{Countries.length}</h2>
            {/* visited countries */}
            <div>
                <h3>Country I Visited : {visitedCountries.length}</h3>
                <ul>
                    {visitedCountries.map(country=> <li key={country.cca3}>{country.name.common}</li>)}
                </ul>
            </div>
            <div className="flag-container"> 
            {
                visitedFlags.map(flag => <img src={flag}></img>)
            }
            </div>
            <div className="country-container">
            {
            Countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag}  country={country} ></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;