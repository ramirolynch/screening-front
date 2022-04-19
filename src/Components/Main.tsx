import { useEffect, useState } from "react";
import { getScreening } from "../Services/ScreeningApi";
import { ScreeningList } from "./ScreeningList";
import { SearchForm } from "./SearchForm";

export function Main () {

    const [results, setResults] = useState<any>([]);


    function setSearchHandler(name: string,countries:string, fuzzy:string) {
        
        getScreening(name, countries, fuzzy).then(response => setResults(response.results));
        
        console.log(results);
    }

    return (
        
        <div className='search'>

            <SearchForm onSubmit={(name, countries, fuzzy) => setSearchHandler(name, countries,fuzzy)}></SearchForm>
            
            <ScreeningList results={results}></ScreeningList>

        </div>
    );
}