import { useContext, useState } from "react";
import { ScreeningContext } from "../Context/ScreeningContext";
import { postReview } from "../Services/ScreeningApi";

export function ReviewMatch (props: {elem:any}) {


    const { searched_name,user_id } = useContext(ScreeningContext)
    const [positiveMatch, setPositiveMatch] = useState<boolean>(false);
    
    function handleFuzzy() {
    
        if (positiveMatch === false) {
            setPositiveMatch(true)
        }
        else {
            setPositiveMatch(false)
          
        }
    }


    function handleClick() {
        postReview(props.elem.list_id,searched_name,props.elem.name,props.elem.score, positiveMatch, user_id)
    }

    return(
        <div className="review">

            <p>Searched Name: </p>
            <p>{searched_name}</p>
           
            <p>Matched Name:</p>
            <p>{props.elem.name}</p>
              
         
            <p>Score</p>
            <p>{props.elem.score}</p>

            <label htmlFor="posMatch">
                <input id='posMatch' type='checkbox' />
            </label>
          
            <button onClick={handleClick}>Search</button>
        
        </div>
    );
}