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


    function setSearchHandler(name: string,countries:string, fuzzy:string) {
        
        getScreening(name, countries, fuzzy).then(response => setResults(response.results));
        addSearchedName(name);
        
        console.log(results);
    }

    return (
        
        <div className='search'>

            <SearchForm onSubmit={(name, countries, fuzzy) => setSearchHandler(name, countries, fuzzy)}></SearchForm>
            <ScreeningList results={results}></ScreeningList>

        </div>
    );
}