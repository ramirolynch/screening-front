import { useState } from "react";

export function SearchForm (props: {onSubmit:(name:string,countries:string, fuzzy:string)=>void}) {

    const [name, setName] = useState('');
    const [countries, setCountries] = useState('');
    const [fuzzy, setFuzzy] = useState<string>('');


    function handleFuzzy() {
    
        if (fuzzy === '') {
            setFuzzy('true')
        }
        else {
            setFuzzy('')
          
        }
        console.log(fuzzy)
    }

    return(
        <div className="searchForm">
            <label htmlFor="name">Name: </label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" /> 
           
            <label htmlFor="fuzzy_name">Fuzzy Search:
                <input id="fuzzy_name"  onChange={handleFuzzy}  type="checkbox" /> 
                </label>
         
            <label htmlFor="country_name">Country:</label>
                <input id="country_name" value={countries} onChange={(e) => setCountries(e.target.value)} type="text" /> 
            

          
                <button onClick={() => props.onSubmit(name, countries, fuzzy)}>Search</button>
        
        </div>
    );
}