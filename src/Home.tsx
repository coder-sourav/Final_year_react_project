import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import Hotels from "./Hotels";

export default function Home(){
    const history=useHistory();

    return(
     <Hotels/>
     )


}