import { useContext, useState } from "react";
import { ScreeningContext } from "../Context/ScreeningContext";
import { postReview } from "../Services/ScreeningApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

        postReview(props.elem.id, searched_name, props.elem.name, props.matchscore, positiveMatch, reviewComment, user_id).then(() => {
            toast.success('Review Saved to DB', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
    }

    return(
        <div className="review">
        <ul>
            <li>Searched Name:{searched_name}</li>
            <li>Matched Name: {props.elem.name}</li>
            <li>Score:{props.matchscore}</li>
            </ul>
        
        <div className='review_form'>

            <label className='positiveMatch'>Positive Match:
            <input value={JSON.stringify(positiveMatch)} onClick={handleCheck} type='checkbox' />
            </label>

            <label>Comments:</label>
            <input className='commentInput' value={reviewComment} onChange={(e: any) => {setReviewComment(e.target.value) }} type='text' />
                
                
        </div>
            
            <button onClick={handleClick}>Submit Review</button>

        <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        
        </div>
    );
}