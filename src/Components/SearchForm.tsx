import { setMaxListeners } from 'process';
import { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'


export function SearchForm (props: {onSubmit:(name:string,countries:string, fuzzy:string, lists:string)=>void}) {

    const [name, setName] = useState('');
    const [countries, setCountries] = useState('');
    const [lists, setLists] = useState('');
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
                <input id="fuzzy_name" onChange={handleFuzzy} type="checkbox" />
            </label>

            <label htmlFor="country_name">Country:</label>

            <Select options={options} value={countries} onChange={changeHandler} />

            <label htmlFor="dplist" className='labeldpl'>List:</label>
            <select className='dpl' onChange={(e) => { setLists(e.target.value) }}>
                <option value=''>Select list...</option>
                <option value="DPL">Denied Persons List</option>
                <option value="EL">Entity List</option>
                <option value="MEU">Military End User</option>
                <option value="UVL">Unverified List</option>
                <option value="ISN">Nonproliferation Sanctions</option>
                <option value="DTC">ITAR Debarred</option>
                <option value="CAP">Correspondent Account or Payable-Through Account Sanctions</option>
                <option value="CMIC">Non-SDN Chinese Military-Industrial Complex Companies List</option>
                <option value="FSE">Foreign Sanctions Evaders</option>
                <option value="MBS">Non-SDN Menu-Based Sanctions List</option>
                <option value="PLC">Palestinian Legislative Council List</option>
                <option value="SSI">Sectoral Sanctions Identifications List</option>
                <option value="SDN">Specially Designated Nationals</option>
            </select>

        <button onClick={() => props.onSubmit(name, countries, fuzzy, lists)}>Search</button>
        
        </div>
    );
}