import { useState } from "react";

import { useEffect } from "react";


const Countries = () => {
    const [Countries,setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => console.log(data))
    },[]);
    return (
        <div>
            <h2>Countries...</h2>
        </div>
    );
};

export default Countries;