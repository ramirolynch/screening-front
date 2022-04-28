import { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

export function SearchForm (props: {onSubmit:(name:string,countries:string, fuzzy:string)=>void}) {

    const [name, setName] = useState('');
    const [countries, setCountries] = useState('');
    const options:any[] = useMemo(() => countryList().getData(), [])
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

    const changeHandler = (value:any) => {
        setCountries(value)
      }
    

    return(
        <div className="searchForm">
            <label htmlFor="name">Name: </label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" /> 
           
            <label htmlFor="fuzzy_name">Fuzzy Search:
                <input id="fuzzy_name"  onChange={handleFuzzy}  type="checkbox" /> 
                </label>
         
            <label htmlFor="country_name">Country:</label>
            
            <Select options={options} value={countries} onChange={changeHandler} />
            

            <button onClick={() => props.onSubmit(name, countries, fuzzy)}>Search</button>
        
        </div>
    );
}