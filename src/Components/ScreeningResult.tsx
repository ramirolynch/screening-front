export function ScreeningResult(props: { elem: any }) {

    return (
        <div>
            <ul className='result'>
                <li>Name: {props.elem.name}</li>
                {props.elem.alt_names.length > 0 && <li>Alternate Names: {props.elem.alt_names}</li>}
                {props.elem.dates_of_birth.length > 0 && <li>Date of Birth: {props.elem.dates_of_birth}</li>}
                {props.elem.places_of_birth.length > 0 && <li>Places of Birth: {props.elem.places_of_birth}</li>}
            </ul>
        </div>
    );
}