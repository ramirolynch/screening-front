import { useContext, useEffect, useState } from "react";
import { ScreeningContext } from "../Context/ScreeningContext";
import { fetchMatchReviews } from "../Services/ScreeningApi";

export function MatchReviews() {
    const { user_id } = useContext(ScreeningContext);
    const [matches, setMatches] = useState();

    useEffect(() => {
        fetchMatchReviews(user_id).then(response => setMatches(response.data))
        
        console.log(matches);
    })
    

    return (
        <div>


        </div>

    );

};