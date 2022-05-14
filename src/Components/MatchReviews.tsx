import { Key, useContext, useEffect, useState } from "react";
import { ScreeningContext } from "../Context/ScreeningContext";
import { fetchMatchReviews } from "../Services/ScreeningApi";
import { MatchReview } from "./MatchReview";


export function MatchReviews() {
    const { user_id } = useContext(ScreeningContext);
    const [matches, setMatches] = useState<any[]>([]);
    

    useEffect(() => {
        fetchMatchReviews(user_id).then((response) => setMatches(response))

    }, [matches])
    
   
    

    return (
        <div className='matchrev'>

            {matches.length > 0 ? matches.map((elem, i) => <MatchReview key={i} elem={elem}></MatchReview>) : <h3>No Match Reviews Were Found.</h3>}

        </div>

    );

};