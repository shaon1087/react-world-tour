import { useState } from "react";
import { useEffect } from "react";
import Country from "./country/Country";


const Countries = () => {
    const [Countries,setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountries(data))
    },[])
    return (
        <div>
            <h2>Countries : {Countries.length}</h2>
            {
                Countries.map(country => <Country country={country}></Country>)
            }
            
        </div>
    );
};

export default Countries;