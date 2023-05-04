import { makeStyles } from "@material-ui/core";
export interface StylesProps{
  height:number;

}


export const useFormStyles=makeStyles<StylesProps>({
  root:{
    display:"flex",
    justifyContent:"center",
    marginTop:"10vh",
  
  },
  container:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center",
    height:"300px",
   

  },
  textFieldConatiner:{
   display:"flex",
   justifyContent:"center",
   width:"100%"
  },
  textField:{
      width:"100%",
    },
sourav:{
 marginLeft:"10px"
}


  
 

})