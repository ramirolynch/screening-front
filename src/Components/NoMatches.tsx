import { Key, useContext, useEffect, useState } from "react";
import { ScreeningContext } from "../Context/ScreeningContext";
import { fetchNoMatches } from "../Services/ScreeningApi";

import { NoMatch } from "./NoMatch";

export function NoMatches() {
    const { user_id } = useContext(ScreeningContext);
    const [nomatches, setNoMatches] = useState<any[]>([]);

    useEffect(() => {
        fetchNoMatches(user_id).then((response) => setNoMatches(response))

    },[nomatches])
    

    return (
        <div>

            {nomatches.length > 0 ? nomatches.map((elem, i) => <NoMatch key={i} elem={elem}></NoMatch>) : <h3>No data in whitelist.</h3>}

        </div>

    );

};