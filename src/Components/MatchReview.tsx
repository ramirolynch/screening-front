import { AiFillDelete } from "react-icons/ai";
import { deleteMatchReview } from "../Services/ScreeningApi";

export function MatchReview(props: { elem: any }) {
    
    function handleClick(id: number) {
        deleteMatchReview(id)
    }
    return (
        <div className='singlereview'>
            <ul>
                <li>List Id: {props.elem.id}</li>
                <li>Searched Name: {props.elem.searched_name}</li>
                <li>Matched Name: {props.elem.matched_name}</li>
                <li>Match Score: {props.elem.score}</li>
                <li>Positive Match: {props.elem.positive_match === true ? `Yes`:`No`}</li>
                <li>Review Comments: {props.elem.review_comments}</li>
            </ul>
            <button className="deletematch" onClick={() => handleClick(props.elem.id)}>
          <AiFillDelete />
        </button>

        </div>
    );

}