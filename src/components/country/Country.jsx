/* eslint-disable react/prop-types */
import { useState } from 'react';
import './country.css'
const Country = ({country,handleVisitedCountry}) => {
    const {name,capital,population,flags,area,cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited=()=>{
        setVisited(!visited);
    }
 
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h2>Name: {name?.common}</h2>
            <h2>Capital: {capital}</h2>
            <img src={flags?.png} alt="" />
            <p>population : {population} </p>
            <p>area: {area}</p>
            <p>code: <small>{cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button><br/><br/>
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            { visited ? ' i have visited this country' : 'i have not visited this country'}
        </div>
    );
};

export default Country;