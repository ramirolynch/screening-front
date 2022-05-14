import { useContext, useEffect, useState } from "react";
import { resourceLimits } from "worker_threads";
import { ScreeningContext } from "../Context/ScreeningContext";
import { getScreening, postNomatch } from "../Services/ScreeningApi";
import { ScreeningResult } from "./ScreeningResult";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export function ScreeningList(props: { results: [] }) {
    
    const { searched_name, user_id } = useContext(ScreeningContext);


    function handleClick() {
        if (searched_name === '') {
            toast.error('Name is empty', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
            
        } 
        postNomatch(searched_name, user_id).then(() => {
            toast.success('Saved to DB', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }).catch((error) => {
            toast.error(`${error.response.data}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
       
    }


    return (<div className='screeningList'>


        {props.results.length > 0 ? props.results.map((elem, i) => <ScreeningResult key={i} elem={elem}></ScreeningResult>) :
            
             <button className='saveToDB' onClick={handleClick}>Save to DB</button>}
        
        <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

       </div>);

}