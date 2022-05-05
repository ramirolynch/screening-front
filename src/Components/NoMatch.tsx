import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import { deleteEmptyMatch } from '../Services/ScreeningApi';


export function NoMatch(props: { elem: any }) {


    function handleClick(id: number) {
        deleteEmptyMatch(id)
    }

    return (
        <div className='emptymatch'>
            <ul>
                <li>Searched Name: {props.elem.searched_name}</li>
                <li>Date and Time Searched: {moment(props.elem.screening_ts).format("MM/DD/YYYY")}</li>
                <li>Searched By: {props.elem.first_name} {props.elem.last_name}</li>
            </ul>
            <button className="deleterev" onClick={() => handleClick(props.elem.id)}>
          <AiFillDelete />
        </button>
        </div>
    );

}


