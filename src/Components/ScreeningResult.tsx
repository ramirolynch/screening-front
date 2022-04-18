export function ScreeningResult(props: { elem: any }) {

    return (
        <div>
            <ul>
                <li>{props.elem.id}</li>
                <li>{props.elem.name}</li>
                <li>{props.elem.alt_names}</li>
                <li>{props.elem.dates_of_birth}</li>
                <li>{props.elem.places_of_birth}</li>
            </ul>
        </div>
    );
}