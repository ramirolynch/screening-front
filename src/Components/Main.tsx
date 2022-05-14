import { useContext, useEffect, useState } from "react";
import { getScreening } from "../Services/ScreeningApi";
import { ScreeningList } from "./ScreeningList";
import { SearchForm } from "./SearchForm";
import { ScreeningContext } from '../Context/ScreeningContext'
import { useLocation, useNavigate } from "react-router-dom";

export function Main() {

    const { authenticated, addSearchedName } = useContext(ScreeningContext);
    let navigate = useNavigate();

    const [results, setResults] = useState<any>([]);
    const [counter, setCounter] = useState<boolean>(false);


    function setSearchHandler(name: string, countries: string, fuzzy: string, lists:string) {
      
        getScreening(name, countries, fuzzy, lists).then(response => {
            setResults(response.results);
        }).then(()=>setCounter(true))
        addSearchedName(name);
    }

    return (
        
        <div className='search'>

            <SearchForm onSubmit={(name, countries, fuzzy, lists) => setSearchHandler(name, countries, fuzzy, lists)}></SearchForm>
            
            <p className={counter === false ? 'hide' : 'show'}> Number of Results: {results.length}</p>
         
            <ScreeningList results={results}></ScreeningList>
                

        </div>
    );
}