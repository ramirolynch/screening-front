import { useContext, useState } from "react";
import { ScreeningContext } from "../Context/ScreeningContext";

import { ReviewMatch } from "./ReviewMatch";
const fuzz = require('fuzzball');

export function ScreeningResult(props: { elem: any }) {

    const [showButton, setShowButton] = useState<boolean>(false);
    const { searched_name } = useContext(ScreeningContext);

    const [matchscore, setMatchScore] = useState<number>(0);
    

    function handleClick() {
        if (showButton === false) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
        setMatchScore(fuzz.ratio(searched_name, props.elem.name))
        console.log(props.elem)
    }

    return (
        <div>
            <ul className='result'>
                <li>Name: {props.elem.name}</li>
                {props.elem.alt_names.length > 0 && <li>Alternate Names: {props.elem.alt_names}</li>}
                {props.elem.dates_of_birth.length > 0 && <li>Date of Birth: {props.elem.dates_of_birth}</li>}
                {props.elem.places_of_birth.length > 0 && <li>Places of Birth: {props.elem.places_of_birth}</li>}
                <li>Score: {fuzz.ratio(searched_name,props.elem.name)} </li>
            </ul>
            <button onClick={handleClick}>
                Review Match
            </button>
            {showButton === true && <ReviewMatch elem={props.elem} matchscore={matchscore}></ReviewMatch>}
        </div>
    );
}