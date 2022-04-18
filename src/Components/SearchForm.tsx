import { useState } from "react";

export function SearchForm (props: {onSubmit:(name:string,countries:string)=>void}) {

    const [name, setName] = useState('');
    const [countries, setCountries] = useState('');

    return(
        <div>
            <label htmlFor="name">Name:
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" /> 
            </label>
         
            <label htmlFor="country_name">Country:
                <input id="country_name" value={countries} onChange={(e) => setCountries(e.target.value)} type="text" /> 
            </label>
            <button onClick={()=> props.onSubmit(name,countries)}>Search</button>
        </div>
    );
}