export function MatchReview(props: { elem:any }) {
    return (
        <div>
            <ul>
                <li>List Id: {props.elem.id}</li>
                <li>Searched Name: {props.elem.searched_name}</li>
                <li>Matched Name: {props.elem.matched_name}</li>
                <li>Match Score: {props.elem.score}</li>
                <li>Positive Match: {props.elem.positive_match === true ? `Yes`:`No`}</li>
                <li>Review Comments: {props.elem.review_comments}</li>
            </ul>

        </div>
    );

}