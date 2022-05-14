import { useState } from "react";

export function Sources(props:{handleChange:(list:string)=>void}) {
    
    const [list, setList] = useState<string>('');

    function handleSelect(e:any) {
        setList(e.target.value)
    }
   
    
    return (
        <div>
            <label htmlFor="">List
                <select onChange={() => { props.handleChange(list)}}>
                    <option value=''>Select list</option>
                    <option value="DPL">Denied Persons List</option>
                    <option value="EL">Entity List</option>
                    <option value="MEU">Military End User</option>
                    <option value="UVL">Unverified List</option>
                </select>
            </label>
        </div>
    );

}