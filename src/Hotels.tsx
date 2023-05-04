import { Divider } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {iStaturizedHotel} from "./HoteReducer";
import { AppState } from "./AppState";
import LoadingSpinner from "./loadingSpinner";



export default function Hotels(){
    const dispatch=useDispatch();
    const statusizeHotel:iStaturizedHotel=useSelector((state: AppState)=>state?.hotelReducer);

    useEffect(()=> {
       async function api(){
          const response=await fetch("/hotel.json");

          console.log(response);
          if(response.ok){
            const json= await response.json();
            dispatch({type:"completed",payload:json});
          }
          else{
            dispatch({type:"failedHotel",payload:[]})
          }
         
        }

        dispatch({type:"notStarted",payload:[]})
        
        api();
       



},[]) 
switch(statusizeHotel.loading){
  case "completed": return <div>loading completed</div>
    case "failed" :  return <div>Failed to load API</div>
    default: return <LoadingSpinner/>
}

return(
  <h1>Hotel UI</h1>
  
)

}