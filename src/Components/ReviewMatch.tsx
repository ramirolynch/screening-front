import { useContext, useState } from "react";
import { ScreeningContext } from "../Context/ScreeningContext";
import { postReview } from "../Services/ScreeningApi";

export function ReviewMatch (props: {elem:any, matchscore:number}) {


    const { searched_name, user_id } = useContext(ScreeningContext)
    const [positiveMatch, setPositiveMatch] = useState<boolean>(false);
    const [reviewComment, setReviewComment] = useState<string>('');
    
    function handleCheck() {
    
        if (positiveMatch === false) {
            setPositiveMatch(true)
        }
        else {
            setPositiveMatch(false)
        }
    }




    function handleClick() {
        
        console.log('positiveMatch', positiveMatch);
        console.log('matchedName', props.elem.name)
        console.log('userId', user_id);

        postReview(props.elem.id ,searched_name, props.elem.name, props.matchscore, positiveMatch, reviewComment, user_id)
    }

    return(
        <div className="review">

            <p>Searched Name: </p>
            <p>{searched_name}</p>
           
            <p>Matched Name:</p>
            <p>{props.elem.name}</p>
              
         
            <p>Score:</p>
            <p>{props.matchscore}</p>

            <label className='positiveMatch'>Positive Match:
            <input value={JSON.stringify(positiveMatch)} onClick={handleCheck} type='checkbox' />
            </label>

            <label>Comments:
                <input value={reviewComment} onChange={(e: any) => {setReviewComment(e.target.value) }} type='text' />
            </label>
             
            <button onClick={handleClick}>Submit Review</button>
        
        </div>
    );
}