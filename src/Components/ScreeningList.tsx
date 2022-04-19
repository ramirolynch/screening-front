import { useEffect, useState } from "react";
import { resourceLimits } from "worker_threads";
import { getScreening } from "../Services/ScreeningApi";
import { ScreeningResult } from "./ScreeningResult";


export function ScreeningList(props:{results:[]}) {


    return (<div>


        {props.results.map((elem, i) => <ScreeningResult key={i} elem={elem}></ScreeningResult>)}

       </div>);

}