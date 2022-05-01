import moment from 'moment';

export function NoMatch(props: { elem: any }) {
    return (
        <div className='emptymatch'>
            <ul>
                <li>Searched Name: {props.elem.searched_name}</li>
                <li>Date and Time Searched: {moment(props.elem.screening_ts).format("MM/DD/YYYY")}</li>
                <li>Searched By: {props.elem.first_name} {props.elem.last_name}</li>
            </ul>
        </div>
    );

}